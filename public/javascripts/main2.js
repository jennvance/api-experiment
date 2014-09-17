$.ajax({

        url: "http://boudevdpc053.markit.partners/internal/DevU_Instructor/CSharp201/trunk/API/Lookup?symbol=msft",
        dataType: "json",
        success: function (Lookup) {
            //$("span.name-schwab-st").html(Lookup.NameSchwabStreet);
            //$("span.schwab-st").html(Lookup.SchwabStreet);
            //$("span.exchange-name").html(Lookup.ExchangeDisplayName);
            var $titleData = $(".title-module");
            var $locateEl = $titleData.find("span");
            $titleData.find(".issue-name").html(Lookup.IssueName);
            $locateEl.find(".schwab-st").html(Lookup.SchwabStreet);
            $locateEl.find(".exchange-name").html(Lookup.ExchangeDisplayName);
            
        }
    });

    $.ajax({
        // url: "http://boudevdpc053.markit.partners/internal/DevU_Instructor/CSharp201/trunk/API/Quote?symbol=msft",
        url: "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=MSFT",
        dataType: "json",
        
        success: function (Quote) {
            console.log("success!");
            console.log(Quote.LastPrice);
            var $titleData = $(".title-module");
            var $locateEl = $titleData.find("span");
            
            var priceLast = numeral(Quote.LastPrice).format('$0,0.00');
            $('.price-last').html(LastPrice);

            var priceChange1Day = numeral(Quote.PriceChange1Day).format('0.0[0]');
            $('.price-change-one-day').html(priceChange1Day);

            var priceChangePercent1Day = numeral(Quote.PriceChangePercent1Day).format('0.0[0]');
            $('span.price-change-percent-one-day').html(priceChangePercent1Day);

            var stockVolume = numeral(Quote.Volume).format('00.00a');
            $('.volume').html(stockVolume);

            var marketCap = numeral(Quote.MarketCap).format('($0.00a)');
            $('.market-cap').html(marketCap);

            var priceOpen = numeral(Quote.PriceOpen).format('$0,0.00');
            $('.price-open').html(priceOpen);

            var priceLastPrev = numeral(Quote.PriceLastPrev).format('$0,0.00');
            $('.price-last-prev').html(priceLastPrev);

            var priceLow = numeral(Quote.PriceLow).format('$0,0.00');
            $('.price-low').html(priceLow);

            var priceHigh = numeral(Quote.PriceHigh).format('$0,0.00');
            $('.price-high').html(priceHigh);

            var low52Week = numeral(Quote.PriceLow52Week).format('$0,0.00');
            $('.low-52-week').html(low52Week);

            var high52Week = numeral(Quote.PriceHigh52Week).format('$0,0.00');
            $('.high-52-week').html(high52Week);

            var beta = numeral(Quote.Beta).format('0,0.00');
            $('.beta').html(beta);

            var volume10Day = numeral(Quote.Volume10Day).format('0,0');
            $('.volume-10-day').html(volume10Day);
        }
    });

    //Headlines: API is an array, must loop through to access
    $.ajax({

        // url: "http://boudevdpc053.markit.partners/internal/DevU_Instructor/CSharp201/trunk/API/Headlines?symbol=msft&count=3",
        url: "http://finance.yahoo.com/rss/headline?s=yhoo",

        dataType: "json",
        success: function (Headlines) {
            var i = 0;
            $(".headline").each(function () {
                $(this).html(Headlines[i].Headline);
                $(this).parent().find(".teaser")
                $(this).parent().find(".teaser").html(Headlines[i].Teaser);
                i++;
            });
        }
    }
    );


    //Profile
    $.ajax({

        url: "http://boudevdpc053.markit.partners/internal/DevU_Instructor/CSharp201/trunk/API/Profile?symbol=msft",
        dataType: "json",
        success: function (Profile) {
            $("p.biz-summary").html(Profile.Description);
            $(".company-link").html(Profile.WebUrl);
            $('.investor-contact').html(Profile.ContactName);
            $('.street-address-1').html(Profile.StreetAddress1);
            $('.city').html(Profile.City);
            $('.state').html(Profile.State);
            $('.postal-code').html(Profile.PostalCode);
            $('.phone').html(Profile.MainPhone);
            $('.fax').html(Profile.FaxNumber);


            //Test for looping through elements
            $(".contact-info p").each(function (i) {
                console.log(i + $(this).text())
            });


            //Show Full Business Summary When Reader Clicks "Read More"
            //After User clicks Read More, change link to "Less". "Less" link displays only 125 characters.
            var $bizSummary = $('.biz-summary');
            var $bizSumP = $bizSummary.find('p');
            var $readMoreLink = $bizSummary.find('.read-more');

            $readMoreLink.on('click', function () {
                var $thisEl = $(this);

                if ($readMoreLink.hasClass('read-less')) {
                    var readLess = Profile.Description.substr(0, 124) + "...";
                    $bizSumP.html(readLess);
                    $thisEl.html("Read More");
                    $thisEl.removeClass('read-less');
                } else {
                    $bizSumP.html(Profile.Description);
                    $thisEl.html("Read Less");
                    $thisEl.addClass('read-less');
                }
            });
        }
    });


        //Chart
    $(".chart-container li > a").on("click", function () {
        var dataVal = $(this).data('timeframe');
        //Highlighted Tabs
        $(".chart li > a").removeClass("active");
        $(this).addClass("active");


        $.ajax({
            url: "http://boudevdpc053.markit.partners/internal/DevU_Instructor/CSharp201/trunk/API/Chart",
            dataType: "json",
            data: {
                "symbol": "msft",
                "timeframe": dataVal
            },
            success: function (Chart) {
                $("img.stock-chart").attr("src", Chart.image);
            }

        });
    });
    //End Chart


