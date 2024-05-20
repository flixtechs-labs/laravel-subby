<template><div><h1 id="subscription-payment-queuer" tabindex="-1"><a class="header-anchor" href="#subscription-payment-queuer"><span>Subscription Payment Queuer <Badge text="new in v6.0" type="tip"/></span></a></h1>
<p>This is the job that needs to be called periodically to collect all the subscriptions (either renewals or schedules) that
have to be paid and process the payments.</p>
<h2 id="what-it-does" tabindex="-1"><a class="header-anchor" href="#what-it-does"><span>What it does</span></a></h2>
<p>The queuer job uses the Payment Collector class. This class retrieves all pending subscription renewals and also all pending
subscription plan change schedules, then the job dispatches new jobs for each type of payment method and action needed
(renewal or schedule).</p>
<h3 id="what-happens-when-subscription-schedule-is-set-at-renewal-date" tabindex="-1"><a class="header-anchor" href="#what-happens-when-subscription-schedule-is-set-at-renewal-date"><span>What happens when subscription schedule is set at renewal date?</span></a></h3>
<p>Subscription schedule change has priority over renewal, so schedule change will be first processed. Plan
change will set a new renewal time in the future, so this renewal will be pushed into the future and not processed at
the same time schedule happens to avoid duplicates.</p>
<h3 id="how-does-the-package-avoid-double-charging" tabindex="-1"><a class="header-anchor" href="#how-does-the-package-avoid-double-charging"><span>How does the package avoid double charging?</span></a></h3>
<p>Both schedule and renewal jobs use Laravel's <a href="https://laravel.com/docs/8.x/queues#preventing-job-overlaps" target="_blank" rel="noopener noreferrer">Preventing Job Overlaps</a>
without release, so only one job per subscription can be active.</p>
<h2 id="how-to-schedule" tabindex="-1"><a class="header-anchor" href="#how-to-schedule"><span>How to schedule</span></a></h2>
<p>Your task schedule is defined in the <code v-pre>app/Console/Kernel.php</code> file's schedule method.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Jobs<span class="token punctuation">\</span>SubscriptionPaymentQueuerJob</span><span class="token punctuation">;</span>

<span class="token variable">$schedule</span><span class="token operator">-></span><span class="token function">job</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SubscriptionPaymentQueuerJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">everyFiveMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


