<template><div><h1 id="laravel-subby" tabindex="-1"><a class="header-anchor" href="#laravel-subby"><span>Laravel Subby</span></a></h1>
<p><strong>Laravel Subby</strong> is a flexible plans and subscription management system for Laravel. Originally forked
from <a href="https://github.com/rinvex/laravel-subscriptions" target="_blank" rel="noopener noreferrer">rinvex/laravel-subscriptions</a>.</p>
<h2 id="what-it-does" tabindex="-1"><a class="header-anchor" href="#what-it-does"><span>What it does</span></a></h2>
<p>The way this package is made:</p>
<ol>
<li>There are <RouteLink to="/v7.x/models/plan-model.html">plans</RouteLink> that have <RouteLink to="/v7.x/models/plan-feature-model.html">features</RouteLink>
<ol>
<li>These plans can have multiple combinations (country, currency, periods...).</li>
</ol>
</li>
<li>There is an entity (morph) receiving the
trait <code v-pre>HasSubscriptions</code> (<RouteLink to="/v7.x/models/plan-subscription-model.html">subscriptions</RouteLink>). It can be a user, a team, whatever you
want; see <RouteLink to="/v7.x/install/#attach-subscription">Attach Subscriptions to model</RouteLink>.</li>
<li>This entity can have many subscriptions to one or more plans and use their features and other features not attached
to a plan. The subscription is made as a &quot;snapshot&quot; of current plan details. If plan is modified in the future,
subscriber's subscription stays as it was, price, invoicing and features are &quot;frozen&quot; unless manually synchronized
with related plan.</li>
</ol>
<h3 id="processing-payments" tabindex="-1"><a class="header-anchor" href="#processing-payments"><span>Processing payments <Badge text="new in v6.0" type="tip"/></span></a></h3>
<p>Payment services are dispatched when renewal or schedule time has come. The package provides a &quot;free&quot; payment service,
with no logic. You need to make your own services for your payment providers.</p>
<h3 id="scheduling-changes" tabindex="-1"><a class="header-anchor" href="#scheduling-changes"><span>Scheduling changes</span></a></h3>
<p>With <RouteLink to="/v7.x/models/plan-subscription-schedule-model.html">Schedule</RouteLink> you can schedule one or multiple plan changes in a future date.</p>
<h2 id="considerations" tabindex="-1"><a class="header-anchor" href="#considerations"><span>Considerations</span></a></h2>
<ul>
<li>Translations are out of scope for this package.</li>
</ul>
<h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog"><span>Changelog</span></a></h2>
<p>Refer to the <a href="https://github.com/bpuig/laravel-subby/releases" target="_blank" rel="noopener noreferrer">Releases</a> for a changelog of the project.</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2>
<p>Forked originally from <a href="https://github.com/rinvex/laravel-subscriptions" target="_blank" rel="noopener noreferrer">rinvex/laravel-subscriptions</a>. Thank you for
creating the original!</p>
<p>This software is released under <RouteLink to="/v7.x/LICENSE.html">The MIT License (MIT)</RouteLink>.</p>
<p>© 2020-2023 B. Puig, Some rights reserved.</p>
</div></template>


