import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DataSyncService } from 'gojs-angular';
import { filter, tap } from 'rxjs/operators';
import { DiagramService } from './diagram.service';
import { createDiagram } from './gojs/create-diagram';
import { createPalette } from './gojs/create-palette';
import { LinkData, ModelData, NodeData } from './gojs/models/model.types';
import { DiagramState } from './models';

@UntilDestroy()
@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DiagramComponent implements OnInit {
  skipsDiagramUpdate = false;
  private diagram?: go.Diagram;
  private palette?: go.Palette;

  paletteNodeData: NodeData[] = [
    {
      key: 'PaletteNode1',
      text: 'Add node',
      content: 'Drag to add new node',
      type: 'info',
    },
  ];

  diagramData?: DiagramState;

  constructor(
    private readonly service: DiagramService,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    (window as any)['previewDiagramData'] = this.service.previewDiagramData;

    this.service.feedData();

    this.service
      .getDiagramData()
      .pipe(
        untilDestroyed(this),
        filter((diagramData) => diagramData != null)
      )
      .subscribe((diagramData: DiagramState) => {
        this.diagramData = diagramData;
        this.cdRef.markForCheck();
      });
  }

  diagramModelChange(changes: go.IncrementalData) {
    if (this.diagram == null || changes == null || this.diagramData == null)
      return;

    const newState = {
      nodes: DataSyncService.syncNodeData(
        changes,
        this.diagramData.nodes,
        this.diagram.model
      ) as NodeData[],
      links: DataSyncService.syncLinkData(
        changes,
        this.diagramData.links,
        this.diagram.model as go.GraphLinksModel
      ) as LinkData[],
      model: DataSyncService.syncModelData(
        changes,
        this.diagramData.model
      ) as ModelData,
    };

    this.skipsDiagramUpdate = true;
    this.service.pushDiagramData(newState);
  }

  initDiagram = () => {
    this.diagram = createDiagram();
    return this.diagram;
  };

  initPalette = () => {
    this.palette = createPalette();
    return this.palette;
  };

  addFromExternal() {
    this.skipsDiagramUpdate = false;
    this.service.addNewNode();
  }

  editExitingNodeStatus() {
    const selection = this.diagram?.selection.map((s) => s.key);
    if (selection && !!selection.count) {
      this.skipsDiagramUpdate = false;
      this.service.switchSelectionStatus(selection);
    }
  }
}
