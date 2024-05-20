<template><div><h1 id="plan-subscription-schedule" tabindex="-1"><a class="header-anchor" href="#plan-subscription-schedule"><span>Plan Subscription Schedule</span></a></h1>
<div class="custom-container danger"><p class="custom-container-title">Breaking changes in v5.0</p>
<p>There are some things different to  <a href="https://github.com/bpuig/laravel-subby-schedule" target="_blank" rel="noopener noreferrer">Laravel Subby Schedule</a>. In the
rare event that you were using the package, please review the docs.</p>
<ul>
<li>Limits were removed</li>
<li>Methods were renamed: <code v-pre>usingService</code> was <code v-pre>service</code></li>
<li>Columns <code v-pre>tries</code> and <code v-pre>timeout</code> are now constants in service</li>
<li>IsScheduled trait no longer exists</li>
</ul>
</div>
<p>Want to change a subscription but not right now? Schedule it at the end of the period? With this model you can
schedule your subscription plan changes.</p>
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
<li><code v-pre>usingService()</code>: References <a href="#services">service</a> name in config file.</li>
</ul>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$date</span> <span class="token operator">=</span> <span class="token class-name static-context">Carbon</span><span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'day'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">toPlan</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">testPlanPro</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onDate</span><span class="token punctuation">(</span><span class="token variable">$date</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">usingService</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'default'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">setSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scopes" tabindex="-1"><a class="header-anchor" href="#scopes"><span>Scopes</span></a></h2>
<p>These are the scopes you can apply to your <code v-pre>PlanSubscriptionSchedule</code> model.</p>
<p><code v-pre>unprocessed()</code> returns all unprocessed schedules (not having success or failure) in the past and in the future.</p>
<p><code v-pre>pending()</code> returns a list of schedules that have not been processed and are due to be processed. To define an ending
date, use <code v-pre>Carbon</code> date as parameter to show pending until specified date. Default returns pending until now.</p>
<h2 id="latest-and-first-schedule-to-date" tabindex="-1"><a class="header-anchor" href="#latest-and-first-schedule-to-date"><span>Latest and first schedule to date</span></a></h2>
<p>With this functions you can retrieve your latest schedule to date, or your next upcoming schedule. Both return <code v-pre>null</code> if
there are no schedules.</p>
<p>This is useful in case you want to always edit the latest schedule and not create new ones.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">getLatestSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Get latest schedule before date (now() or parameter with date)</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">getFirstSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Get first schedule after date (now() or parameter with date)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="services" tabindex="-1"><a class="header-anchor" href="#services"><span>Services</span></a></h2>
<p>By default, the config file includes a <code v-pre>default</code> service for processing your plan change. This service it's a good
starting point to see how it works. The default service is an empty service that will not perform any action or stop the
plan change.</p>
<h3 id="how-to-make-a-service" tabindex="-1"><a class="header-anchor" href="#how-to-make-a-service"><span>How to make a service?</span></a></h3>
<p>In the example <code v-pre>ScheduleService</code> you can see the minimum requirements of a service.</p>
<p>Your own service has to implement interface <code v-pre>PlanSubscriptionScheduleService</code> and also use <code v-pre>IsScheduleService</code>
trait. <code v-pre>__construct</code> accepts one parameter, the <code v-pre>PlanSubscriptionSchedule</code> Eloquent object of the subscription schedule.</p>
<p>The outcome to later change plan or not is defined by <code v-pre>success</code> property. By default, is <code v-pre>false</code>, so your successful
process has to set it to <code v-pre>true</code>. Any exception will stop the process.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>


<span class="token keyword">namespace</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services</span><span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>PlanSubscriptionScheduleService</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Traits<span class="token punctuation">\</span>IsScheduleService</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ScheduleService</span> <span class="token keyword">implements</span> <span class="token class-name">PlanSubscriptionScheduleService</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">IsScheduleService</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * ScheduleService constructor.
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
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-options" tabindex="-1"><a class="header-anchor" href="#service-options"><span>Service options</span></a></h3>
<p>The defined options for the job that will call the service will be defined in constants the service file. By default,
PlanSubscriptionSchedule contract has this settings.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token keyword">const</span> <span class="token constant">TRIES</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// Number of tries job will be attempted</span>
<span class="token keyword">const</span> <span class="token constant">TIMEOUT</span><span class="token operator">=</span><span class="token number">120</span><span class="token punctuation">;</span> <span class="token comment">// Timeout for the job that will launch the service.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs"><span>Jobs</span></a></h2>
<p>To process the schedules you can include the <code v-pre>SubscriptionScheduleQueuerJob</code> in your app schedule or make your own jobs.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">schedule</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Schedule</span> <span class="token variable">$schedule</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token variable">$schedule</span><span class="token operator">-></span><span class="token function">job</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SubscriptionScheduleQueuerJob</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">everyFiveMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This job will make dispatch jobs for pending subscription changes.</p>
<p>I recommend running first this job with a date parameter and then chain your regular subscription renewal job with said
date parameter as end to avoid collision since a subscription can have same <code v-pre>ends_at</code> and <code v-pre>scheduled_at</code> dates. This
order of events would prevent renewals before schedules, since after schedule is processed <code v-pre>ends_at</code> would have changed
to next period.</p>
</div></template>


