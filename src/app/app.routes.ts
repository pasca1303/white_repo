import { Routes } from '@angular/router';
import { InfluencersListComponent } from './components/influencers-list/influencers-list.component'
import { TransactionSettingsComponent } from './components/transaction-settings/transaction-settings.component'
import { TokenListComponent } from './components/token-list/token-list.component'
import { SettingsComponent } from './components/settings/settings.component'

export const routes: Routes = [
	{ path: "influencersList", component: InfluencersListComponent},
	{path: "transactionSetting", component: TransactionSettingsComponent},
	{path: "tokenList", component: TokenListComponent},
	{path: "settings", component: SettingsComponent}


];
