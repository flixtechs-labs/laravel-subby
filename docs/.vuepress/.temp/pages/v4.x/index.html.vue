<template><div><h1 id="laravel-subby" tabindex="-1"><a class="header-anchor" href="#laravel-subby"><span>Laravel Subby</span></a></h1>
<p><strong>Laravel Subby</strong> is a flexible plans and subscription management system for Laravel. Originally forked
from <a href="https://github.com/rinvex/laravel-subscriptions" target="_blank" rel="noopener noreferrer">rinvex/laravel-subscriptions</a>.</p>
<h2 id="what-it-does" tabindex="-1"><a class="header-anchor" href="#what-it-does"><span>What it does</span></a></h2>
<p>The way this package is made:</p>
<ol>
<li>There are <RouteLink to="/v4.x/models/plan-model.html">plans</RouteLink> that have <RouteLink to="/v4.x/models/plan-feature-model.html">features</RouteLink>.</li>
<li>There is an entity (morph) receiving the
trait <code v-pre>HasSubscriptions</code> (<RouteLink to="/v4.x/models/plan-subscription-model.html">subscriptions</RouteLink>). It can be a user, a team, whatever you
want; see <RouteLink to="/v4.x/install/#attach-subscription">Attach Subscriptions to model</RouteLink>.</li>
<li>This entity can have many subscriptions to one or more plans and use their features and other features not attached
to a plan. The subscription is made as a &quot;snapshot&quot; of current plan details. If plan is modified in the future,
subscriber's subscription stays as it was, price, invoicing and features are &quot;frozen&quot; unless manually synchronized
with related plan.</li>
</ol>
<h2 id="extensions" tabindex="-1"><a class="header-anchor" href="#extensions"><span>Extensions</span></a></h2>
<ul>
<li><a href="https://github.com/bpuig/laravel-subby-schedule" target="_blank" rel="noopener noreferrer">Laravel Subby Schedule</a>: For scheduling your plan changes in the
future.</li>
</ul>
<h2 id="considerations" tabindex="-1"><a class="header-anchor" href="#considerations"><span>Considerations</span></a></h2>
<ul>
<li>Payments and translations are out of scope for this package.</li>
<li>You may want to extend some core models, in case you need to override the logic behind some helper methods
like <code v-pre>renew()</code>, <code v-pre>cancel()</code> etc. E.g.: when cancelling a subscription you may want to also cancel the recurring payment
attached.</li>
</ul>
<h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog"><span>Changelog</span></a></h2>
<p>Refer to the <RouteLink to="/v4.x/CHANGELOG.html">Changelog</RouteLink> for a full history of the project.</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2>
<p>Forked originally from <a href="https://github.com/rinvex/laravel-subscriptions" target="_blank" rel="noopener noreferrer">rinvex/laravel-subscriptions</a>. Thank you for
creating the original!</p>
<p>This software is released under <RouteLink to="/v4.x/LICENSE.html">The MIT License (MIT)</RouteLink>.</p>
<p>© 2020-2021 B. Puig, Some rights reserved.</p>
</div></template>


