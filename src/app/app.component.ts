import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularBinaryTree';
  treeNodes: any[] = [];

  ngOnInit(): void {
    this.treeNodes = [];
    // tslint:disable-next-line:max-line-length
    const parentNode = { Text: 'Top Parent', ID: 1, Children: [{ Text: 'Parent', ID: 2, Children: [{ Text: 'Child one', ID: 4, Children: [{ Text: 'Child one 1.1', ID: 8, Children: [] }, { Text: 'Child one 1.2', ID: 9, Children: [{ Text: 'Child one 1.1.1', ID: 8, Children: [] }, { Text: 'Child one 1.2.2', ID: 9, Children: [] }] }] }, { Text: 'Child Two', ID: 5, Children: [] }] }, { Text: 'Parent One', ID: 3, Children: [{ Text: 'Child one', ID: 6, Children: [] }, { Text: 'Child Two', ID: 7, Children: [] }] }] };
    this.treeNodes.push(parentNode);
  }
  addQuestion(item: any) {
    item.Children.push({ Text: item.Text + ' ' + item.Children.length, ID: 0, Children: [] });
    item.Children.push({ Text: item.Text + ' ' + item.Children.length, ID: 0, Children: [] });
  }
  removeQuestion(item: any) {
    item.Children = [];
  }
}
