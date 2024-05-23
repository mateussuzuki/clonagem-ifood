import { Component } from '@angular/core';
import { TopicsHeader } from '../../models/topicsHeader.model';


@Component({
  selector: 'app-topics-header',
  templateUrl: './topics-header.component.html',
  styleUrl: './topics-header.component.scss'
})
export class TopicsHeaderComponent {
  topics:TopicsHeader = new TopicsHeader

}
