import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCadastroProdutos } from './admin-cadastro-produtos';

describe('AdminCadastroProdutos', () => {
  let component: AdminCadastroProdutos;
  let fixture: ComponentFixture<AdminCadastroProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCadastroProdutos]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminCadastroProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
