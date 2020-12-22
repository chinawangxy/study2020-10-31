import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WyCarouselComponent implements OnInit {
  // true 变更检测前运行 【模板静态】， false 变更检测后运行 【模板动态】
  @ViewChild('dot', { static: true }) dotRef: TemplateRef<any>;
  @Input() activeIndex: number = 0;
  // 定义发射器
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();

  constructor() {}

  ngOnInit(): void {}

  onChangeSlide(type: 'pre' | 'next'): void {
    // 将事件源发射出去
    this.changeSlide.emit(type);
  }
}
