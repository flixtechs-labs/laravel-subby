<template><div><h1 id="subscription-renewal-payment" tabindex="-1"><a class="header-anchor" href="#subscription-renewal-payment"><span>Subscription Renewal Payment <Badge text="new in v6.0" type="tip"/></span></a></h1>
<p>This is the job that needs to be called to process a subscription payment. This job does not check if the subscription
is due for payment (that is done in the (Subscription Payment Queuer Job)).</p>
<h2 id="what-it-does" tabindex="-1"><a class="header-anchor" href="#what-it-does"><span>What it does</span></a></h2>
<p>This job passes data to and calls <code v-pre>execute()</code> method on the payment method service.</p>
</div></template>


