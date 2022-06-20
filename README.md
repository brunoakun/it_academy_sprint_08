# ItAcademySprint08 Star Wars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.
## 1.- Bootstrap
- npm install bootstrap
- npm install @popperjs/core 
-*In your angular.json Add bootstrap & popper (css+js) to your styles and scripts*
```
"styles": [
  "src/scss/styles.scss",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
],
"scripts": [
  "./node_modules/@popperjs/core/dist/umd/popper.min.js",
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
## 2.- Montar el ROUTING  
- *En src\app\app-routing.module.ts, crear la constante appRutas y exportarla*
```
const routes: Routes = [
  { path: '', component:  HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
...
```
- *Añadir un componente de menú con los href's y en app.component.html, añadir el control de rutas:*

```
<li class="nav-item">
    <a class="nav-link" href="/naves">starships</a>
</li>
...
<app-navbar></app-navbar>
<router-outlet></router-outlet>
```