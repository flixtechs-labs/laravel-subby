<template><div><h1 id="plan-subscription-schedule" tabindex="-1"><a class="header-anchor" href="#plan-subscription-schedule"><span>Plan Subscription Schedule</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#what-it-does">What it does</router-link></li><li><router-link to="#usage">Usage</router-link><ul><li><router-link to="#create-schedule">Create schedule <Badge text="updated in v6.0" type="warning"/></router-link></li></ul></li><li><router-link to="#scopes">Scopes</router-link></li><li><router-link to="#latest-and-first-schedule-to-date">Latest and first schedule to date</router-link></li><li><router-link to="#service">Service <Badge text="updated in v6.0" type="warning"/></router-link><ul><li><router-link to="#how-to-make-a-service">How to make a service?</router-link></li><li><router-link to="#service-options">Service options</router-link></li></ul></li><li><router-link to="#dispatch-the-schedule-job">Dispatch the schedule job</router-link></li></ul></nav>
<p>Want to change a subscription but not right now? Schedule it at the end of the period? With this model you can
schedule your subscription plan changes.</p>
<h2 id="what-it-does" tabindex="-1"><a class="header-anchor" href="#what-it-does"><span>What it does</span></a></h2>
<ul>
<li>Plan Subscription is scheduled to change to another plan or plan combination at a certain date in the future.
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
<h3 id="create-schedule" tabindex="-1"><a class="header-anchor" href="#create-schedule"><span>Create schedule <Badge text="updated in v6.0" type="warning"/></span></a></h3>
<div class="custom-container danger"><p class="custom-container-title">Breaking change in v6.0</p>
<p>Method <code v-pre>usingService</code> is abandoned to use subscription's payment method.</p>
</div>
<p>You can schedule a change in your user subscription like this:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$date</span> <span class="token operator">=</span> <span class="token class-name static-context">Carbon</span><span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'day'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$proPlan</span> <span class="token operator">=</span> <span class="token class-name static-context">Plan</span><span class="token operator">::</span><span class="token function">findByTag</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'pro-plan'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">toPlan</span><span class="token punctuation">(</span><span class="token variable">$proPlan</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onDate</span><span class="token punctuation">(</span><span class="token variable">$date</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">setSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scopes" tabindex="-1"><a class="header-anchor" href="#scopes"><span>Scopes</span></a></h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>Service <Badge text="updated in v6.0" type="warning"/></span></a></h2>
<div class="custom-container danger"><p class="custom-container-title">Breaking change in v6.0</p>
<p>There are no longer multiple services to process the schedule. There is only one and it uses payments set via config.</p>
</div>
<p>By default, the config file includes a service for processing your plan change. This service it's a good
starting point to see how it works. The service is a template service that will use payment method and do the plan change.</p>
<h3 id="how-to-make-a-service" tabindex="-1"><a class="header-anchor" href="#how-to-make-a-service"><span>How to make a service?</span></a></h3>
<p>In the <code v-pre>ScheduleService</code> you can see the minimum requirements of a service.</p>
<p>Your own service has to implement interface <code v-pre>PlanSubscriptionScheduleService</code>. <code v-pre>__construct</code> accepts one parameter, the
<code v-pre>PlanSubscriptionSchedule</code> Eloquent object of the subscription schedule.</p>
<p>In this file you can see how it works. A change is considered failed when an exception is raised. Any exception will stop
the process and flag it as failed. If no exceptions are raised, it means payment has been successful and change can be done.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>


<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>PlanSubscriptionScheduleService</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>PlanSubscriptionSchedule</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token keyword">function</span> <span class="token package">app</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ScheduleService</span> <span class="token keyword">implements</span> <span class="token class-name">PlanSubscriptionScheduleService</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$planSubscriptionSchedule</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * ScheduleService constructor.
     * Save current Plan Subscription Schedule
     * <span class="token keyword">@param</span> <span class="token class-name">PlanSubscriptionSchedule</span> <span class="token parameter">$planSubscriptionSchedule</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">PlanSubscriptionSchedule</span> <span class="token variable">$planSubscriptionSchedule</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">planSubscriptionSchedule</span> <span class="token operator">=</span> <span class="token variable">$planSubscriptionSchedule</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Execute the strategy
     * Try charging via default payment method and then change plan
     * <span class="token keyword">@throws</span> <span class="token class-name"><span class="token punctuation">\</span>Exception</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token variable">$payment</span> <span class="token operator">=</span> <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">make</span><span class="token punctuation">(</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'subby.services.payment_methods.'</span> <span class="token operator">.</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">planSubscriptionSchedule</span><span class="token operator">-></span><span class="token property">subscription</span><span class="token operator">-></span><span class="token property">payment_method</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$payment</span><span class="token operator">-></span><span class="token function">charge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Exception</span> <span class="token variable">$exception</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">planSubscriptionSchedule</span><span class="token operator">-></span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Exception</span><span class="token punctuation">(</span><span class="token variable">$exception</span><span class="token operator">-></span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$exception</span><span class="token operator">-></span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">planSubscriptionSchedule</span><span class="token operator">-></span><span class="token function">changeSubscriptionPlan</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-options" tabindex="-1"><a class="header-anchor" href="#service-options"><span>Service options</span></a></h3>
<p>The defined options for the job that will call the service will be defined in constants the service file. By default,
PlanSubscriptionSchedule contract has this settings.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token keyword">const</span> <span class="token constant">TRIES</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// Number of tries job will be attempted</span>
<span class="token keyword">const</span> <span class="token constant">TIMEOUT</span><span class="token operator">=</span><span class="token number">120</span><span class="token punctuation">;</span> <span class="token comment">// Timeout for the job that will launch the service.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dispatch-the-schedule-job" tabindex="-1"><a class="header-anchor" href="#dispatch-the-schedule-job"><span>Dispatch the schedule job</span></a></h2>
<p>See <RouteLink to="/v6.x/payments/jobs/subscription-payment-queuer-job.html">Subscription payment queuer job</RouteLink></p>
</div></template>


