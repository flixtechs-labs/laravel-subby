<template><div><h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog"><span>Changelog</span></a></h1>
<p>All notable changes to <code v-pre>laravel-subby</code> will be documented in this file.</p>
<h2 id="_4-0-2" tabindex="-1"><a class="header-anchor" href="#_4-0-2"><span>4.0.2</span></a></h2>
<h2 id="changes" tabindex="-1"><a class="header-anchor" href="#changes"><span>Changes</span></a></h2>
<ul>
<li>Subscription tag scope @boryn (#69)</li>
</ul>
<h2 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes"><span>Bug Fixes</span></a></h2>
<ul>
<li>End trial when subscription is renewed. @bpuig (#68)</li>
</ul>
<h2 id="_4-0-1" tabindex="-1"><a class="header-anchor" href="#_4-0-1"><span>4.0.1</span></a></h2>
<h2 id="changes-1" tabindex="-1"><a class="header-anchor" href="#changes-1"><span>Changes</span></a></h2>
<h2 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1"><span>Bug Fixes</span></a></h2>
<ul>
<li>canUseFeature also on trial @bpuig (#65)</li>
</ul>
<h2 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation"><span>Documentation</span></a></h2>
<ul>
<li>updated plan-subscription-feature-model.md @boryn (#64)</li>
</ul>
<h2 id="_4-0-0" tabindex="-1"><a class="header-anchor" href="#_4-0-0"><span>4.0.0</span></a></h2>
<h3 id="plans" tabindex="-1"><a class="header-anchor" href="#plans"><span>Plans</span></a></h3>
<h4 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes"><span>Breaking Changes</span></a></h4>
<ul>
<li>Removed <code v-pre>hasGrace()</code> method from plan and it's database related columns.</li>
<li>Removed columns from database that had no logic implemented:
<ul>
<li><code v-pre>prorate_day</code>, <code v-pre>prorate_period</code>, <code v-pre>prorate_extend_due</code>, <code v-pre>active_subscribers_limit</code>, <code v-pre>grace_period</code>
, <code v-pre>grace_interval</code>, <code v-pre>timezone</code></li>
</ul>
</li>
</ul>
<h3 id="plan-features" tabindex="-1"><a class="header-anchor" href="#plan-features"><span>Plan features</span></a></h3>
<h4 id="breaking-changes-1" tabindex="-1"><a class="header-anchor" href="#breaking-changes-1"><span>Breaking Changes</span></a></h4>
<ul>
<li>Removed <code v-pre>usage()</code> method.</li>
</ul>
<h3 id="plan-subscription" tabindex="-1"><a class="header-anchor" href="#plan-subscription"><span>Plan subscription</span></a></h3>
<h4 id="new" tabindex="-1"><a class="header-anchor" href="#new"><span>New</span></a></h4>
<ul>
<li>Dettached plan subscriptions from plans, now they are their own replica of the plan. This makes the legal part of the
subscription easier since when someone subscribes to a plan, and then you change the plan, it will affect existing
contracts and in some places, changing conditions unilaterally can put you in trouble. Plan is referenced only for
reference features.
<ul>
<li>Now plan subscription clones plan columns <code v-pre>price</code>, <code v-pre>currency</code>, <code v-pre>invoice_period</code>, <code v-pre>invoice_interval</code> and <code v-pre>tier</code>.
They will stay like that even when you change parent plan prices.</li>
</ul>
</li>
<li>Add method <code v-pre>isFree()</code>, <code v-pre>getDaysUntilEnds()</code>, <code v-pre>getDaysUntilTrialEnds()</code>, <code v-pre>getRemainingPriceProrate()</code></li>
<li>Add method <code v-pre>isAltered()</code> to know if features are the same as in plan.</li>
<li>Add method <code v-pre>getDaysUntilEnds()</code> to get number of days until subscription ends.</li>
<li>Add method <code v-pre>getDaysUntilTrialEnds()</code> to get number of days until subscription trial ends.</li>
<li>Add method <code v-pre>getRemainingPriceProrate()</code> to retrieve remaining price amount that would have not been consumed.</li>
</ul>
<h4 id="breaking-changes-2" tabindex="-1"><a class="header-anchor" href="#breaking-changes-2"><span>Breaking Changes</span></a></h4>
<ul>
<li><code v-pre>newSubscription()</code> method fourth parameter is <code v-pre>$description</code> instead of <code v-pre>$startDate</code>. By default, it takes plan's
description.</li>
</ul>
<h3 id="plan-subscription-usage" tabindex="-1"><a class="header-anchor" href="#plan-subscription-usage"><span>Plan subscription usage</span></a></h3>
<h4 id="breaking-changes-3" tabindex="-1"><a class="header-anchor" href="#breaking-changes-3"><span>Breaking Changes</span></a></h4>
<ul>
<li>Removed <code v-pre>subscription</code> relationship.</li>
<li>Removed columns from database that had no logic implemented:
<ul>
<li><code v-pre>timezone</code></li>
</ul>
</li>
<li>Renamed columns to keep relationships clearer:
<ul>
<li><code v-pre>subscription_id</code> to <code v-pre>plan_subscription_id</code></li>
<li><code v-pre>feature_id</code> to <code v-pre>plan_subscription_feature_id</code></li>
</ul>
</li>
</ul>
<h3 id="plan-subscription-features" tabindex="-1"><a class="header-anchor" href="#plan-subscription-features"><span>Plan subscription features</span></a></h3>
<h4 id="new-1" tabindex="-1"><a class="header-anchor" href="#new-1"><span>New</span></a></h4>
<ul>
<li>Dettached subscription features from plans, now they are their own replica of the plan features.</li>
</ul>
<h3 id="plan-subscription-schedule" tabindex="-1"><a class="header-anchor" href="#plan-subscription-schedule"><span>Plan subscription Schedule</span></a></h3>
<h4 id="breaking-changes-4" tabindex="-1"><a class="header-anchor" href="#breaking-changes-4"><span>Breaking Changes</span></a></h4>
<ul>
<li>Now schedules are separated in their own extension, which allows use of Laravel 7 and 6.</li>
</ul>
</div></template>


