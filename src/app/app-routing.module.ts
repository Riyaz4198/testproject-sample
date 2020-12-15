import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionalizerComponent } from 'e2e/src/sectionalizer/sectionalizer.component';
import { HomepageComponent } from 'e2e/src/homepage/homepage.component';
import {SwitchComponent} from 'e2e/src/switch/switch.component';
import { AppComponent } from './app.component';
import {FusesaverComponent} from 'e2e/src/fusesaver/fusesaver.component';
import {TripsaverComponent} from 'e2e/src/tripsaver/tripsaver.component';
import {InterrupterElastimoldComponent} from 'e2e/src/interrupter-elastimold/interrupter-elastimold.component';
import {InterrupterSelComponent} from 'e2e/src/interrupter-sel/interrupter-sel.component';
import {CapacitorGisComponent} from 'e2e/src/capacitor-gis/capacitor-gis.component';
import {RecloserBeckwithComponent} from 'e2e/src/recloser-beckwith/recloser-beckwith.component';
import {RecloserBeckmode2Component} from 'e2e/src/recloser-beckmode2/recloser-beckmode2.component';
import {RecloserBeckmode3Component} from 'e2e/src/recloser-beckmode3/recloser-beckmode3.component';
import {RecloserCooperComponent} from 'e2e/src/recloser-cooper/recloser-cooper.component';
import {RecloserCooperaltComponent} from 'e2e/src/recloser-cooperalt/recloser-cooperalt.component';
import {RecloserCoopergisComponent} from 'e2e/src/recloser-coopergis/recloser-coopergis.component';
import {RecloserBeckGisComponent} from 'e2e/src/recloser-beck-gis/recloser-beck-gis.component';
import {RegulatorComponent} from 'e2e/src/Regulator/Regulator.component';
import {CapacitorComponent} from 'e2e/src/capacitor/capacitor.component';

const routes: Routes = [
  { path: 'sectionalizer', component: SectionalizerComponent },
  { path: '', component: HomepageComponent },
  { path: 'fusesaver', component: FusesaverComponent },
  { path: 'tripsaver', component: TripsaverComponent },
  { path: 'intelastimold', component: InterrupterElastimoldComponent },
  { path: 'intsel', component: InterrupterSelComponent },
  { path: 'capgis', component: CapacitorGisComponent },
  { path: 'capacitor', component: CapacitorComponent },
  { path: 'recloser-coop', component: RecloserCooperComponent },
  { path: 'recloser-coopalt', component: RecloserCooperaltComponent },
  { path: 'recloser-beck', component: RecloserBeckwithComponent },
  { path: 'recloser-beckmode2', component: RecloserBeckmode2Component },
  { path: 'recloser-beckmode3', component: RecloserBeckmode3Component },
  { path: 'recloser-beck-gis', component: RecloserBeckGisComponent },
  { path: 'recloser-cooper-gis', component: RecloserCoopergisComponent },
  { path: 'regulator', component: RegulatorComponent },
  { path: 'switch', component: SwitchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
