import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { NodeData, LinkData } from './gojs/models/model.types';
import { getNextType } from './gojs/utils/utils';
import { DiagramState } from './models';

@Injectable({ providedIn: 'root' })
export class DiagramService {
  private diagramData$ = new BehaviorSubject<DiagramState>({
    nodes: [],
    links: [],
    model: {},
  });

  getDiagramData(): Observable<DiagramState> {
    return this.diagramData$.asObservable();
  }

  pushDiagramData(data: DiagramState) {
    this.diagramData$.next(data);
  }

  feedData() {
    this.pushDiagramData({ nodes: mockNodes, links: mockLinks, model: {} });
  }

  addNewNode() {
    const data = this.diagramData$.getValue();

    const newEl: NodeData = {
      key: uuidv4(),
      text: 'Add node',
      content: 'Drag to add new node',
      type: 'info',
    };

    this.diagramData$.next({
      ...data,
      nodes: [...data.nodes, newEl],
    });
  }

  switchSelectionStatus(selection: go.Set<go.Key>) {
    const data = this.diagramData$.getValue();
    const newNodes = data.nodes.map((node) => ({
      ...node,
      type: selection.contains(node.key) ? getNextType(node.type) : node.type,
    }));
    this.diagramData$.next({
      ...data,
      nodes: newNodes,
    });
  }

  previewDiagramData = () => {
    console.log(this.diagramData$.getValue());
  };
}

const mockNodes: NodeData[] = [
  {
    key: uuidv4(),
    text: 'Node aaa1',
    content: 'Something might be broken',
    type: 'warning',
  },
  {
    key: uuidv4(),
    text: 'Node aaa2',
    content: 'An event happened',
    type: 'info',
  },
  {
    key: uuidv4(),
    text: 'Node aaa3',
    content: 'Everything works fine',
    type: 'success',
  },
  {
    key: uuidv4(),
    text: 'Node aaa4',
    content: 'Node is broken. Engine failure',
    type: 'error',
  },
];

const mockLinks: LinkData[] = [
  { key: -1, from: mockNodes[0].key, to: mockNodes[1].key },
  { key: -2, from: mockNodes[0].key, to: mockNodes[2].key },
];
