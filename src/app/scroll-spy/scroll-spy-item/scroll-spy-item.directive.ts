import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ChangeDetectorRef,
} from '@angular/core';
import { SpyActiveChange } from '../shared/spy.model';

/**
 * A directive used to add an `active` class to a nav item
 * when the section is in the viewport
 *
 * @example
 * ```html
 * <a snScrollSpyItem for="foo" href="#section1">Section 1</a>
 * ```
 *
 */
@Directive({
  selector: '[snScrollSpyItem]',
})
export class ScrollSpyItemDirective {
  /**
   * True if the nav item is the active item in the `items` list
   * for `ScrollSpyDirective` instance
   *
   * @memberof ScrollSpyItemDirective
   */
  @HostBinding('class.active')
  public get active(): boolean {
    return this._active;
  }

  public set active(isActive: boolean) {
    if (isActive) {
      this.activeChange.emit({
        id: this.href,
        isActive: isActive,
      });
    }
    this._active = isActive;
  }

  private _active: boolean;

  /**
   * ID of `ScrollSpyDirective` instance
   *
   * @memberof ScrollSpyItemDirective
   */
  @Input()
  public for: string;
  /**
   * Hash for section to link to
   *
   * @memberof ScrollSpyItemDirective
   */
  @Input()
  public href: string;
  /**
   * If true means the section is in the viewport
   *
   * @memberof ScrollSpyItemDirective
   */
  public inViewport = false;
  /**
   * Id of section that links navigates to
   *
   * @readonly
   * @memberof ScrollSpyItemDirective
   */
  public get section(): string {
    return this.href.replace('#', '');
  }

  @Output() activeChange = new EventEmitter<SpyActiveChange>();

  /**
   * Creates an instance of ScrollSpyItemDirective.
   * @memberof ScrollSpyItemDirective
   */
  constructor(private cdRef: ChangeDetectorRef) {}
  /**
   * Manually trigger change detection
   *
   * @memberof ScrollSpyItemDirective
   */
  public detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
