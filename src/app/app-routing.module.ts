import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  { path: 'inicial', loadChildren: './pages/inicial/inicial.module#InicialPageModule' },
 
  { path: 'artes', loadChildren: './pages/artes/artes.module#ArtesPageModule' },
  { path: 'informatica', loadChildren: './pages/informatica/informatica.module#InformaticaPageModule' },
  { path: 'geografia', loadChildren: './pages/geografia/geografia.module#GeografiaPageModule' },
  { path: 'mat', loadChildren: './pages/mat/mat.module#MatPageModule' },
  { path: 'direito', loadChildren: './pages/direito/direito.module#DireitoPageModule' },

 
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'java', loadChildren: './pages/informatica/java/java.module#JavaPageModule' },
  { path: 'historia', loadChildren: './pages/historia/historia.module#HistoriaPageModule' },
  { path: 'espanhol', loadChildren: './pages/espanhol/espanhol.module#EspanholPageModule' },
  { path: 'vaj', loadChildren: './pages/informatica/java/vaj/vaj.module#VajPageModule' },




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
            loadChildren: () =>
            import( './pages/login/login.module').then(m => m.LoginPageModule)
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

 
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
 
  { path: 'vad', loadChildren: './pages/informatica/android/vad/vad.module#VadPageModule' },
  
  { path: 'vjsc', loadChildren: './pages/informatica/javascript/vjsc/vjsc.module#VjscPageModule' },
  { path: 'vhtml', loadChildren: './pages/informatica/html/vhtml/vhtml.module#VhtmlPageModule' },
 
  { path: 'vgti', loadChildren: './pages/informatica/gestao/vgti/vgti.module#VgtiPageModule' },
 
  { path: 'vitil', loadChildren: './pages/informatica/itil/vitil/vitil.module#VitilPageModule' },
  
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
