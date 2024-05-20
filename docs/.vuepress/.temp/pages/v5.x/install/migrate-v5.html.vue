<template><div><h1 id="upgrade-v4-to-v5" tabindex="-1"><a class="header-anchor" href="#upgrade-v4-to-v5"><span>Upgrade v4 to v5</span></a></h1>
<h2 id="composer" tabindex="-1"><a class="header-anchor" href="#composer"><span>Composer</span></a></h2>
<p>In your composer version, require v5.</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token property">"bpuig/laravel-subby"</span><span class="token operator">:</span> <span class="token string">"^5.0"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2>
<p>New lines in config:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token string single-quoted-string">'fallback_plan_tag'</span> <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="schedule-configuration" tabindex="-1"><a class="header-anchor" href="#schedule-configuration"><span>Schedule configuration</span></a></h3>
<p>Merge this lines into your current config.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token comment">// Database Tables</span>
<span class="token string single-quoted-string">'tables'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'plan_subscription_schedules'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'plan_subscription_schedules'</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string single-quoted-string">'models'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'plan_subscription_schedule'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>PlanSubscriptionSchedule</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string single-quoted-string">'services'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'schedule'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'default'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>ScheduleService</span><span class="token operator">::</span><span class="token keyword">class</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="migrations" tabindex="-1"><a class="header-anchor" href="#migrations"><span>Migrations</span></a></h2>
<p>Publish v5 migrations</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>subby.migrations.v5.0.0
php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes"><span>Breaking changes</span></a></h2>
<h3 id="getdaysuntiltrialends-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#getdaysuntiltrialends-method-in-subscription"><span><code v-pre>getDaysUntilTrialEnds</code> method in subscription</span></a></h3>
<p>Is now named <code v-pre>getTrialPeriodRemainingUsageIn('day')</code> and accepts new parameters.</p>
<h3 id="gettotaldurationindays-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#gettotaldurationindays-method-in-subscription"><span><code v-pre>getTotalDurationInDays</code> method in subscription</span></a></h3>
<p>Is now named <code v-pre>getSubscriptionTotalDurationIn('day')</code> and accepts new parameters.</p>
<h3 id="getdaysuntilends-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#getdaysuntilends-method-in-subscription"><span><code v-pre>getDaysUntilEnds</code> method in subscription</span></a></h3>
<p>Is now named <code v-pre>getSubscriptionPeriodRemainingUsageIn('day')</code> and accepts new parameters.</p>
<h3 id="getremainingperiodproportion-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#getremainingperiodproportion-method-in-subscription"><span><code v-pre>getRemainingPeriodProportion</code> method in subscription</span></a></h3>
<p>Is now named <code v-pre>getRemainingSubscriptionPeriodProportion()</code> and accepts new parameters.</p>
<h3 id="getremainingpriceprorate-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#getremainingpriceprorate-method-in-subscription"><span><code v-pre>getRemainingPriceProrate</code> method in subscription</span></a></h3>
<p>Is now named <code v-pre>getSubscriptionRemainingUsagePriceProrate()</code> and accepts new parameters.</p>
<h3 id="setnewperiod-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#setnewperiod-method-in-subscription"><span><code v-pre>setNewPeriod</code> method in subscription</span></a></h3>
<p><code v-pre>setNewPeriod</code> has been removed.</p>
<h3 id="syncplan-method-which-also-relates-to-changeplan-in-subscription" tabindex="-1"><a class="header-anchor" href="#syncplan-method-which-also-relates-to-changeplan-in-subscription"><span><code v-pre>syncPlan</code> method (which also relates to <code v-pre>changePlan</code>) in subscription</span></a></h3>
<p><code v-pre>syncPlan</code> now does not renew the subscription</p>
</div></template>


