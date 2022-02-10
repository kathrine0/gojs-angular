import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
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
}

const mockNodes = [
  {
    key: uuidv4(),
    text: 'Node aaa1',
    content: 'Something might be broken',
    type: 'warning',
  },
  { key: uuidv4(), text: 'Node aaa2', content: 'An event happened', type: 'info' },
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

const mockLinks = [
  { key: -1, from: mockNodes[0].key, to: mockNodes[1].key },
  { key: -2, from: mockNodes[0].key, to: mockNodes[2].key },
];
