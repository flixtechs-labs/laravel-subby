import{_ as r,r as i,c,a,e,d as s,w as t,b as l,o as h}from"./app-Vnr7Qnzh.js";const d={},u=l('<h1 id="laravel-subby" tabindex="-1"><a class="header-anchor" href="#laravel-subby"><span>Laravel Subby</span></a></h1><p><strong>Laravel Subby</strong> is a flexible plans and subscription management system for Laravel. Originally forked from <a href="https://github.com/rinvex/laravel-subscriptions" target="_blank" rel="noopener noreferrer">rinvex/laravel-subscriptions</a>.</p><h2 id="what-it-does" tabindex="-1"><a class="header-anchor" href="#what-it-does"><span>What it does</span></a></h2><p>The way this package is made:</p>',4),p=a("ol",null,[a("li",null,"These plans can have multiple combinations (country, currency, periods...).")],-1),g=a("code",null,"HasSubscriptions",-1),m=a("li",null,`This entity can have many subscriptions to one or more plans and use their features and other features not attached to a plan. The subscription is made as a "snapshot" of current plan details. If plan is modified in the future, subscriber's subscription stays as it was, price, invoicing and features are "frozen" unless manually synchronized with related plan.`,-1),f={id:"processing-payments",tabindex:"-1"},b={class:"header-anchor",href:"#processing-payments"},v=a("p",null,'Payment services are dispatched when renewal or schedule time has come. The package provides a "free" payment service, with no logic. You need to make your own services for your payment providers.',-1),_=a("h3",{id:"scheduling-changes",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#scheduling-changes"},[a("span",null,"Scheduling changes")])],-1),y=l('<h2 id="considerations" tabindex="-1"><a class="header-anchor" href="#considerations"><span>Considerations</span></a></h2><ul><li>Translations are out of scope for this package.</li></ul><h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog"><span>Changelog</span></a></h2><p>Refer to the <a href="https://github.com/bpuig/laravel-subby/releases" target="_blank" rel="noopener noreferrer">Releases</a> for a changelog of the project.</p><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2><p>Forked originally from <a href="https://github.com/rinvex/laravel-subscriptions" target="_blank" rel="noopener noreferrer">rinvex/laravel-subscriptions</a>. Thank you for creating the original!</p>',6),x=a("p",null,"© 2020-2023 B. Puig, Some rights reserved.",-1);function k(w,T){const n=i("RouteLink"),o=i("Badge");return h(),c("div",null,[u,a("ol",null,[a("li",null,[e("There are "),s(n,{to:"/v7.x/models/plan-model.html"},{default:t(()=>[e("plans")]),_:1}),e(" that have "),s(n,{to:"/v7.x/models/plan-feature-model.html"},{default:t(()=>[e("features")]),_:1}),p]),a("li",null,[e("There is an entity (morph) receiving the trait "),g,e(" ("),s(n,{to:"/v7.x/models/plan-subscription-model.html"},{default:t(()=>[e("subscriptions")]),_:1}),e("). It can be a user, a team, whatever you want; see "),s(n,{to:"/v7.x/install/#attach-subscription"},{default:t(()=>[e("Attach Subscriptions to model")]),_:1}),e(".")]),m]),a("h3",f,[a("a",b,[a("span",null,[e("Processing payments "),s(o,{text:"new in v6.0",type:"tip"})])])]),v,_,a("p",null,[e("With "),s(n,{to:"/v7.x/models/plan-subscription-schedule-model.html"},{default:t(()=>[e("Schedule")]),_:1}),e(" you can schedule one or multiple plan changes in a future date.")]),y,a("p",null,[e("This software is released under "),s(n,{to:"/v7.x/LICENSE.html"},{default:t(()=>[e("The MIT License (MIT)")]),_:1}),e(".")]),x])}const L=r(d,[["render",k],["__file","index.html.vue"]]),B=JSON.parse('{"path":"/v7.x/","title":"Laravel Subby","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"What it does","slug":"what-it-does","link":"#what-it-does","children":[{"level":3,"title":"Processing payments","slug":"processing-payments","link":"#processing-payments","children":[]},{"level":3,"title":"Scheduling changes","slug":"scheduling-changes","link":"#scheduling-changes","children":[]}]},{"level":2,"title":"Considerations","slug":"considerations","link":"#considerations","children":[]},{"level":2,"title":"Changelog","slug":"changelog","link":"#changelog","children":[]},{"level":2,"title":"License","slug":"license","link":"#license","children":[]}],"git":{"updatedTime":1676824984000,"contributors":[{"name":"Borja Puig","email":"bdpuig@gmail.com","commits":2}]},"filePathRelative":"v7.x/README.md"}');export{L as comp,B as data};
