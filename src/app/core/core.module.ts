import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';

import { AlertModule } from './alert/alert.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [HeaderComponent, NotFoundComponent, ],
    imports: [CommonModule, AlertModule, AppRoutingModule, MatButtonModule, TranslateModule],
    exports: [HeaderComponent, AlertModule, AppRoutingModule, ],
    providers: []
})
export class CoreModule {}
