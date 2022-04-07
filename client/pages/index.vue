<template>
  <div>
    <div class="w-full flex justify-center mt-16 pb-20">
      <div class="container flex flex-nowrap">
        <div class="flex flex-col justify-center w-7/12 lg:w-full">
          <h1 class="font-montserrat text-4xl font-bold leading-normal">
            Package tracking made easy, you just need a tracking number!
          </h1>
          <p class="mt-4 text-lg leading-relaxed">
            Track packages from China, US Post, Canada Post, Royal Mail,
            Deutsche Post, Vova, Aliexpress, UPS, Shein, FedEx, Pitney Bowes,
            eBay, Amazon
          </p>
          <SearchBar class="mt-6"></SearchBar>
        </div>
        <div class="flex ml-10 flex-1 items-start lg:hidden">
          <img src="/img/undraw_deliveries.svg" />
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center bg-secondary">
      <div class="container flex-col items-center pt-12 pb-12">
        <div class="text-3xl font-bold font-montserrat text-center">
          International Package Tracking
        </div>
        <div class="text-lg text-center pt-3">
          Regardless of the online store or the market you have purchased, you
          can always trace the full path of the order with our parcel tracking
          service.
        </div>
        <CouriersCards></CouriersCards>
        <div class="mt-8 text-lg relative">
          We provide tracking of parcels from a large number of postal services
          and stores around the world.
          <NuxtLink to="/" class="text-link">Full list</NuxtLink>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center bg-white">
      <div class="container flex-col items-center pt-20 pb-20">
        <div class="flex justify-between w-full">
          <div class="flex flex-col items-center flex-1 ml-5 mr-5">
            <img class="h-28" src="/img/undraw_mailbox.svg" />
            <div class="pt-5 font-montserrat font-semibold">
              Over 600 supported couriers
            </div>
            <div class="pt-3 text-center text-text">
              This tool allows you to track packages from over 200 different
              countries covered by over 600 couriers and used by the biggest
              eCommerce companies like Amazon, Ebay, Walmart, Etsy, and Target.
            </div>
          </div>
          <div class="flex flex-col items-center flex-1 ml-5 mr-5">
            <img class="h-28" src="/img/undraw_selection.svg" />
            <div class="pt-5 font-montserrat font-semibold">
              Automatic courier detection
            </div>
            <div class="pt-3 text-center text-text">
              To help you save time, our algorithm automatically detects the
              courier that took charge of your parcel - but at the same time,
              this does not prevent you from manually choosing the courier you
              want to get information from.
            </div>
          </div>
          <div class="flex flex-col items-center flex-1 ml-5 mr-5">
            <img class="h-28" src="/img/undraw_mailSent.svg" />
            <div class="pt-5 font-montserrat font-semibold">
              Email alerts on status change
            </div>
            <div class="pt-3 text-center text-text">
              In addition to tracking packages here on the website, you can also
              enable email notifications to stay informed about the progress of
              your order, as well as the location of your package each time it
              is updated.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-secondary justify-center flex pt-12 pb-12">
      <div class="container flex-col items-start">
        <div class="text-lg font-montserrat font-semibold">
          Is it possible to catch new coronavirus from via packages from China?
        </div>
        <p class="pt-4 text-textDark">
          No, You Won't Catch The New Coronavirus Via Packages Or Mail From
          China, according to the Centers for Disease Control and Prevention.
          "Because of poor survivability of these coronaviruses on surfaces,
          there is likely very low risk of spread from products or packaging
          that are shipped over a period of days or weeks at ambient
          temperatures," the CDC concludes in its Q&A. It is highly unlikely
          that the virus could survive for multiple days outside or inside a
          cardboard box, for example, that contains something an infected person
          had sneezed on or handled.
        </p>
        <div class="text-lg font-montserrat font-semibold pt-5">
          Am I at risk for novel coronavirus from a package or products shipping
          from China?
        </div>
        <p class="pt-4 text-textDark">
          In general, because of poor survivability of these coronaviruses on
          surfaces, there is likely very low risk of spread from products or
          packaging that are shipped over a period of days or weeks at ambient
          temperatures. Coronaviruses are generally thought to be spread most
          often by respiratory droplets. Currently there is no evidence to
          support transmission of 2019-nCoV associated with imported goods and
          there have not been any cases of 2019-nCoV in the United States
          associated with imported goods. "Shipping conditions of most products
          are going to be not conducive to the virus remaining viable". Despite
          what you might've heard, you cannot get the virus from an imported
          package. The virus is very fragile outside the human body, which means
          you can't get it from a package or an envelope.
        </p>
        <div class="text-lg font-montserrat font-semibold pt-5">
          Contracting coronavirus form imported goods
        </div>
        <p class="pt-4 text-textDark">
          Some people have raised concerns that they might be able to contract
          the coronavirus from imported goods packed by people in other
          countries who might be sick. Public health experts point out that the
          virus can only live for a few hours on hard surfaces, and the only way
          it's being spread between people is through close contact.
        </p>
        <div class="text-lg font-montserrat font-semibold pt-5">
          The spread of the coronavirus is likely to impact significantly on UK
          importers and consumers
        </div>
        <p class="pt-4 text-textDark">
          Restrictions on shipments and compulsory factory closures in China’s
          Hubei province, which is at the centre of the coronavirus outbreak,
          will mean significant delays on items from this important Chinese
          manufacturing area. China Post’s Express Mail Service (EMS) announced
          on Sunday that it will delay shipping orders to disinfect goods. EMS
          said: “To ensure the public’s safety, we will ‘double-disinfect’ the
          parcels and the vehicles that will go through Wuhan, delaying the
          shipping progress.”
        </p>
        <div class="text-lg font-montserrat font-semibold pt-5">
          Is it possible to catch new coronavirus from via packages from China?
        </div>
        <p class="pt-4 text-textDark">
          No, You Won't Catch The New Coronavirus Via Packages Or Mail From
          China, according to the Centers for Disease Control and Prevention.
          "Because of poor survivability of these coronaviruses on surfaces,
          there is likely very low risk of spread from products or packaging
          that are shipped over a period of days or weeks at ambient
          temperatures," the CDC concludes in its Q&A. It is highly unlikely
          that the virus could survive for multiple days outside or inside a
          cardboard box, for example, that contains something an infected person
          had sneezed on or handled.
        </p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {};
</script>
