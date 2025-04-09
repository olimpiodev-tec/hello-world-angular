import { Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { AppsComponent } from './apps/apps.component';
import { MediaComponent } from './media/media.component';
import { CepComponent } from './cep/cep.component';

export const routes: Routes = [
    {
        path: 'contador', component: ContadorComponent
    },
    {
        path: 'mensagem', component: MensagemComponent
    },
    {
        path: 'apps', component: AppsComponent
    },
    {
        path: 'media', component: MediaComponent
    },
    {
        path: 'cep', component: CepComponent
    }
];
