import { TestBed, async } from '@angular/core/testing';
import { NgxQrcodescanComponent } from "./ngx-qrcodescan.component";
describe('NgxQrscanComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          NgxQrcodescanComponent
      ],
    }).compileComponents();
  }));
  it('should create the ngx-qrscan', async(() => {
    const fixture = TestBed.createComponent(NgxQrcodescanComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ngx-qrscan'`, async(() => {
    const fixture = TestBed.createComponent(NgxQrcodescanComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngx-qrscan');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(NgxQrcodescanComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ngx-qrscan!');
  }));
});
