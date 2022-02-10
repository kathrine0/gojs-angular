import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSyncService } from 'gojs-angular';
import { filter } from 'rxjs/operators';
import { DiagramService } from './diagram.service';
import { createDiagram } from './gojs/create-diagram';
import { createPalette } from './gojs/create-palette';
import { LinkData, ModelData, NodeData } from './gojs/models/model.types';
import { DiagramState } from './models';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DiagramComponent implements OnInit {
  skipsDiagramUpdate = false;
  private diagram: go.Diagram | undefined;
  private palette: go.Palette | undefined;

  paletteNodeData = [
    {
      key: 'PaletteNode1',
      text: 'Add node',
      content: 'Drag to add new node',
      type: 'info',
    },
  ];

  diagramData!: DiagramState;

  constructor(private service: DiagramService) {
    this.service.feedData();
  }

  ngOnInit() {
    this.service
      .getDiagramData()
      .pipe(filter((x) => x != null))
      .subscribe((x: DiagramState) => {
        this.skipsDiagramUpdate = true;
        this.diagramData = x;
      });
  }

  diagramModelChange(changes: go.IncrementalData) {
    if (this.diagram == null || changes == null) return;

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

    this.service.pushDiagramData(newState);
  }

  initDiagram = () => {
    this.diagram = createDiagram();
    (window as any)['diagram'] = this.diagram;
    return this.diagram;
  };

  initPalette = () => {
    this.palette = createPalette();

    return this.palette;
  };
}
