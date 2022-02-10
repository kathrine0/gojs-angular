import { DiagramState } from './models';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LinkData, ModelData, NodeData } from './gojs/models/model.types';

@Injectable({ providedIn: 'root' })
export class AppService {
  private diagramData$ = new BehaviorSubject<DiagramState>({ nodes: [], links: [], model: {} });

  getDiagramData(): Observable<DiagramState> {
    return this.diagramData$.asObservable();
  }

  pushDiagramData(data: DiagramState) {
    this.diagramData$.next(data);
  }

  feedData() {
    this.pushDiagramData(mockData);
  }
}

const mockData = {
  nodes: [
    { key: 1, text: 'Node 1', content: 'Something might be broken', type: 'warning' },
    { key: 2, text: 'Node 2', content: 'An event happened',type: 'info' },
    { key: 3, text: 'Node 3', content: 'Everything works fine',type: 'success' },
    { key: 4, text: 'Node 4', content: 'Node is broken. Engine failure',type: 'error' },
  ],
  links: [
    { key: -1, from: 1, to: 2 },
    { key: -2, from: 1, to: 3 },
  ],
  model: {},
};
