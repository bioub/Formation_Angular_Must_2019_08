import { Component, OnInit, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'must-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class SelectComponent implements OnInit {

  // @ViewChild('container', {static: false}) container !: ElementRef;

  @Input() opened = false;
  @Input() selected: string;
  @Input() items = ['Rouge', 'Vert', 'Bleu'];

  @Output() selectedChange = new EventEmitter<string>();

  constructor(protected host: ElementRef) { }

  ngOnInit() {
    if (!this.selected && this.items.length) {
      this.selected = this.items[0];
    }
  }

  selectItem(item) {
    this.selected = item;
    this.close();
    this.selectedChange.emit(item);
  }

  @HostListener('document:click', ['$event'])
  close(event: MouseEvent = null) {
    if (event && this.host.nativeElement.contains(event.target)) {
      return;
    }
    this.opened = false;
  }
}
