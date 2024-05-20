<template><div><h1 id="plan-subscription-schedule" tabindex="-1"><a class="header-anchor" href="#plan-subscription-schedule"><span>Plan Subscription Schedule</span></a></h1>
<p>Want to change a subscription but not right now? Schedule it at the end of the period? With this optional extra feature
you can schedule your subscription plan changes.</p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<p>Installation is simple, follow this steps:</p>
<h3 id="previous-requirements" tabindex="-1"><a class="header-anchor" href="#previous-requirements"><span>Previous Requirements</span></a></h3>
<p>This extra uses Laravel 8 batch processing. If you do not use the Jobs included in the package and make your own
processing jobs you do not need batch processing tables. If you intend to use package jobs refer
to <a href="https://laravel.com/docs/8.x/queues#job-batching" target="_blank" rel="noopener noreferrer">Queues: Job batching</a> in Laravel's official documentation.</p>
<h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3>
<h4 id="upgrading-from-0-1-x" tabindex="-1"><a class="header-anchor" href="#upgrading-from-0-1-x"><span>Upgrading from 0.1.x</span></a></h4>
<p>Versions lower than <code v-pre>0.2.0</code> do not include this part in config. If you installed this package after version <code v-pre>0.2.0</code>you
can skip this step.</p>
<p>In config file <code v-pre>subby.php</code> include after <code v-pre>models</code> array:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code>
<span class="token comment">// Plan schedule settings (Optional if you do not use IsScheduled trait)</span>
<span class="token string single-quoted-string">'schedule'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'schedules_per_subscription'</span> <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token comment">// Maximum number of schedules allowed for a subscription (null for no limit)</span>
    <span class="token string single-quoted-string">'tables'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'plan_subscription_schedules'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'plan_subscription_schedules'</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'models'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'plan_subscription_schedule'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>PlanSubscriptionSchedule</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'services'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'default'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>PlanSubscriptionSchedule<span class="token punctuation">\</span>DefaultScheduleService</span><span class="token operator">::</span><span class="token keyword">class</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="upgrading-from-0-2-x" tabindex="-1"><a class="header-anchor" href="#upgrading-from-0-2-x"><span>Upgrading from 0.2.x</span></a></h4>
<p>Versions lower than <code v-pre>0.3.0</code> do not include <code v-pre>schedules_per_subscription</code> in config. Default behaviour is not breaking.
You can set it to <code v-pre>null</code> to continue with functionality as it was in <code v-pre>0.2.0</code>.</p>
<h3 id="migrations" tabindex="-1"><a class="header-anchor" href="#migrations"><span>Migrations</span></a></h3>
<p>Publish specific migrations for this extra:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>subby.migrations.plan-subscription-schedule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Migrate:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="extend-plan-subscription-model" tabindex="-1"><a class="header-anchor" href="#extend-plan-subscription-model"><span>Extend Plan Subscription Model</span></a></h3>
<p>Since this extra is activated by a trait in your <code v-pre>PlanSubscription</code> model, you need to extend it.</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>php artisan make:model PlanSubscription
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then edit it to extend package model and add <code v-pre>IsScheduled</code> trait.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Traits<span class="token punctuation">\</span>PlanSubscriptionSchedule<span class="token punctuation">\</span>IsScheduled</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">PlanSubscription</span> <span class="token keyword">extends</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>PlanSubscription</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">IsScheduled</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In your <code v-pre>subby</code> config file locate and change used model with the model you extended in previous step:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token comment">// Models</span>
<span class="token string single-quoted-string">'models'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token string single-quoted-string">'plan_subscription'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>PlanSubscription</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That is it, now you are capable of scheduling subscription plan changes.</p>
<h2 id="what-it-does" tabindex="-1"><a class="header-anchor" href="#what-it-does"><span>What it does</span></a></h2>
<ul>
<li>Plan Subscription is scheduled to change to another plan at a certain date in the future.
<ul>
<li>In this schedule you specify date and which service will be executed before the change.</li>
<li>You can also set a timeout and tries for the job.</li>
</ul>
</li>
<li>A job is added in your app schedule</li>
<li>When the time comes, job batches all pending schedules and dispatches it.
<ul>
<li>Job will execute your defined service before plan change, if it succeeds, change will be done. If it fails,
schedule will be flagged as failed.</li>
</ul>
</li>
</ul>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<h3 id="create-schedule" tabindex="-1"><a class="header-anchor" href="#create-schedule"><span>Create schedule</span></a></h3>
<p>You can schedule a change in your user subscription like this:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$date</span> <span class="token operator">=</span> <span class="token class-name static-context">Carbon</span><span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'day'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">toPlan</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">testPlanPro</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onDate</span><span class="token punctuation">(</span><span class="token variable">$date</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">setSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can set other options like:</p>
<ul>
<li><code v-pre>service()</code>: References <a href="#services">service</a> name in config file.</li>
<li><code v-pre>timeout()</code>: Timeout for the job that will launch the service.</li>
<li><code v-pre>tries()</code>: Number of tries job will be attempted</li>
</ul>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$date</span> <span class="token operator">=</span> <span class="token class-name static-context">Carbon</span><span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'day'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">toPlan</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">testPlanPro</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onDate</span><span class="token punctuation">(</span><span class="token variable">$date</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">service</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'default'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">tries</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">setSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="schedules-per-subscription" tabindex="-1"><a class="header-anchor" href="#schedules-per-subscription"><span>Schedules per subscription</span></a></h3>
<p>As introduced in <code v-pre>0.3.0</code>, you can now set a limit of schedules per subscription in your config.</p>
<p>You can check if subscription has reached its limit on your subscription object
with <code v-pre>$subscription-&gt;reachedScheduleLimit()</code>.</p>
<p>You can also dynamically ignore the schedule limit with <code v-pre>ignoreLimit(true|false)</code> (defaults to <code v-pre>true</code>):</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">toPlan</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">testPlanPro</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onDate</span><span class="token punctuation">(</span><span class="token variable">$date</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">ignoreLimit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">setSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="scopes" tabindex="-1"><a class="header-anchor" href="#scopes"><span>Scopes</span></a></h2>
<p>This are the scopes you can apply to your <code v-pre>PlanSubscriptionSchedule</code> model.</p>
<p><code v-pre>notProcessed()</code> returns all unprocessed schedules (not having success or failure) in the past and in the future.</p>
<h3 id="pending" tabindex="-1"><a class="header-anchor" href="#pending"><span>Pending</span></a></h3>
<p><code v-pre>pending()</code> returns a list of schedules that have not been processed and are due to be processed. To define an ending
date, use <code v-pre>Carbon</code> date as parameter to show pending until specified date. Default returns pending until now.</p>
<h2 id="services" tabindex="-1"><a class="header-anchor" href="#services"><span>Services</span></a></h2>
<p>By default, the config file includes a <code v-pre>default</code> service for processing your plan change. This service it's a good
starting point to see how it works. The default service is an empty service that will not perform any action or stop the
plan change.</p>
<h3 id="how-to-make-a-service" tabindex="-1"><a class="header-anchor" href="#how-to-make-a-service"><span>How to make a service?</span></a></h3>
<p>In the example <code v-pre>DefaultScheduleService</code> you can see the minimum requirements of a service.</p>
<p>Your own service has to implement interface <code v-pre>PlanSubscriptionScheduleService</code> and also use <code v-pre>IsScheduleService</code>
trait. <code v-pre>__construct</code> accepts one parameter, the <code v-pre>PlanSubscriptionSchedule</code> Eloquent object of the subscription schedule.</p>
<p>The outcome to later change plan or not is defined by <code v-pre>success</code> property. By default is <code v-pre>false</code>, so your successful
process has to set it to <code v-pre>true</code>. Any exception will stop the process.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>


<span class="token keyword">namespace</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>PlanSubscriptionSchedule</span><span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>PlanSubscriptionScheduleService</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Traits<span class="token punctuation">\</span>PlanSubscriptionSchedule<span class="token punctuation">\</span>IsScheduleService</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">DefaultScheduleService</span> <span class="token keyword">implements</span> <span class="token class-name">PlanSubscriptionScheduleService</span>
<span class="token punctuation">{</span>

    <span class="token keyword">use</span> <span class="token package">IsScheduleService</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * DefaultScheduleService constructor.
     * Save current Plan Subscription Schedule
     * <span class="token keyword">@param</span> <span class="token parameter">$planSubscriptionSchedule</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$planSubscriptionSchedule</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">planSubscriptionSchedule</span> <span class="token operator">=</span> <span class="token variable">$planSubscriptionSchedule</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Execute the strategy
     *
     * Since this is kind of a dummy process, set success to true
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">success</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">clearUsage</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs"><span>Jobs</span></a></h2>
<p>To process the schedules you need to include the <code v-pre>SubscriptionScheduleQueuerJob</code> in your app schedule.</p>
<p>I recommend setting it without overlapping, since package allows to schedule multiple plan changes for the same
subscription. In <code v-pre>app/Console/Kernel.php</code>:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">schedule</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Schedule</span> <span class="token variable">$schedule</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        <span class="token variable">$schedule</span><span class="token operator">-></span><span class="token function">job</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SubscriptionScheduleQueuerJob</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">everyFiveMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">withoutOverlapping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This job will make a batch of jobs for pending subscription changes.</p>
<p>I recommend running first this job with a date parameter and then chain your regular subscription renewal job with said
date parameter as end to avoid collision since a subscription can have same <code v-pre>ends_at</code> and <code v-pre>scheduled_at</code> dates. This
order of events would prevent renewals before schedules, since after schedule is processed <code v-pre>ends_at</code> would have changed
to next period.</p>
</div></template>


