import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AdminCadastroProdutos } from './pages/admin-cadastro-produtos/admin-cadastro-produtos';

export const routes: Routes = [
    {path: '',
        component: HomeComponent,
        title: 'Home',
    }, 
    {path:'login',
        component: LoginComponent,
        title: 'Login',
    },
{path: 'admin-cadastro-produtos',
    component: AdminCadastroProdutos,
    title: 'Admin - Cadastro de Produtos',
},
];
