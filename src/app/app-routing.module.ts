import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  { path: 'inicial', loadChildren: './pages/inicial/inicial.module#InicialPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'artes', loadChildren: './pages/artes/artes.module#ArtesPageModule' },
  { path: 'informatica', loadChildren: './pages/informatica/informatica.module#InformaticaPageModule' },
  { path: 'geografia', loadChildren: './pages/geografia/geografia.module#GeografiaPageModule' },
  { path: 'mat', loadChildren: './pages/mat/mat.module#MatPageModule' },
  { path: 'direito', loadChildren: './pages/direito/direito.module#DireitoPageModule' },
  { path: 'biologia', loadChildren: './pages/biologia/biologia.module#BiologiaPageModule' },
 
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'java', loadChildren: './pages/informatica/java/java.module#JavaPageModule' },
  { path: 'historia', loadChildren: './pages/historia/historia.module#HistoriaPageModule' },
  { path: 'espanhol', loadChildren: './pages/espanhol/espanhol.module#EspanholPageModule' },
  { path: 'vaj', loadChildren: './pages/informatica/java/vaj/vaj.module#VajPageModule' },

  { path: 'podj', loadChildren: './pages/informatica/java/podj/podj.module#PodjPageModule' },
  { path: 'poda', loadChildren: './pages/informatica/poda/poda.module#PodaPageModule' },
  { path: 'podjsf', loadChildren: './pages/informatica/podjsf/podjsf.module#PodjsfPageModule' },
  { path: 'podh', loadChildren: './pages/informatica/podh/podh.module#PodhPageModule' },
  { path: 'podg', loadChildren: './pages/informatica/podg/podg.module#PodgPageModule' },
  { path: 'podi', loadChildren: './pages/informatica/podi/podi.module#PodiPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },

  {
    path: 'home',
    
    children: [
      {
        
        
        path: 'inicial',
       
        children: [
          {
            path: '',
            loadChildren: './pages/inicial/inicial.module#InicialPageModule'
          },
        
        ]
      },
      {
        path: '',
        redirectTo: '/app/pages/inicial',
        pathMatch: 'full'
      },
      {
        
        
        path: 'chat',
       
        children: [
          {
            path: '',
            loadChildren: './pages/chat/chat.module#ChatPageModule'
          },
        
        ]
      },
      {
        path: '',
        redirectTo: '/app/pages/chat',
        pathMatch: 'full'
      },
      {
        
        
        path: 'register',
       
        children: [
          {
            path: '',
            loadChildren: './pages/register/register.module#RegisterPageModule'
          },
        
        ]
      },
      {
        path: '',
        redirectTo: '/app/pages/register',
        pathMatch: 'full'
      },
   
      {
         
        path: 'login',
       
        children: [
          {
            path: '',
            loadChildren: './pages/login/login.module#LoginPageModule'
          },
        
        ]
      },
      {
        path: '',
        redirectTo: '/app/pages/cadastro',
        pathMatch: 'full'
      }
    ]
  },
  { path: 'apoj', loadChildren: './pages/informatica/java/apoj/apoj.module#ApojPageModule' },
  { path: 'sbn', loadChildren: './pages/sbn/sbn.module#SbnPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'quizj', loadChildren: './pages/informatica/java/quizj/quizj.module#QuizjPageModule' },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
