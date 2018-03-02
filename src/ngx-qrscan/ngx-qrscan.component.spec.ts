import { TestBed, async } from '@angular/core/testing';
import { NgxQrscanComponent } from './ngx-qrscan.component';
describe('NgxQrscanComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          NgxQrscanComponent
      ],
    }).compileComponents();
  }));
  it('should create the ngx-qrscan', async(() => {
    const fixture = TestBed.createComponent(NgxQrscanComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ngx-qrscan'`, async(() => {
    const fixture = TestBed.createComponent(NgxQrscanComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngx-qrscan');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(NgxQrscanComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ngx-qrscan!');
  }));
});
