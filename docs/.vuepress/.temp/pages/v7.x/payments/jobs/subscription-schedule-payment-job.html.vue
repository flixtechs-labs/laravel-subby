<template><div><h1 id="subscription-schedule-payment" tabindex="-1"><a class="header-anchor" href="#subscription-schedule-payment"><span>Subscription Schedule Payment <Badge text="new in v6.0" type="tip"/></span></a></h1>
<p>This is the job that needs to be called to process a subscription scheduled change and payment. This job does not check
if the schedule is due (that is done in the (Subscription Payment Queuer Job)).</p>
<h2 id="what-it-does" tabindex="-1"><a class="header-anchor" href="#what-it-does"><span>What it does</span></a></h2>
<p>This job passes data to and calls <code v-pre>execute()</code> method on the payment method service.</p>
</div></template>


