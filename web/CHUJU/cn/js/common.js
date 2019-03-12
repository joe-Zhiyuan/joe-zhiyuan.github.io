window.onload = function(){
    // 首页搜索效果
    if(document.body.clientWidth <= 500) {
        $(".searchBtn").attr("type","button");
        $(".search").on("click",function(){
            $(".searchMobile").stop().slideToggle(200);
        });
    }
    // 轮播图
    try {
        //banner图片轮播
        var swiper1 = new Swiper("#banner", {
            autoplay: {
                delay:3500
            },
            loop: true,  //克隆组件使上边不能获取到，无法使用
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
            pagination: {
                el: '#banner .swiper-pagination',
                clickable :true
            }
        });
        //鼠标移入停止自动切换
        swiper1.el.onmouseover = function () {
            swiper1.autoplay.stop();
        };
        //鼠标移出开始自动切换
        swiper1.el.onmouseout = function () {
            swiper1.autoplay.start();
        };
        // 产品图片展示
        var swiper2 = new Swiper("#product", {
            slidesPerView: 4,//每行显示4个
            slidesPerColumn: 1,//显示1行
            spaceBetween: 30,//图片间距
            slidesPerGroup: 1,//定义多少一组，一次滑动多少
            breakpoints: {//宽度适应
                //当宽度小于等于480
                400: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                650: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1100: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            },
            autoplay:true,
            // loop: true,  //克隆组件使上边不能获取到，无法使用
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
            navigation: {
                nextEl: '#product .swiper-button-next',
                prevEl: '#product .swiper-button-prev'
            }
        });
        //鼠标移入停止自动切换
        swiper2.el.onmouseover = function () {
            swiper2.autoplay.stop();
        };
        //鼠标移出开始自动切换
        swiper2.el.onmouseout = function () {
            swiper2.autoplay.start();
        };
    }catch (error){
        console.log("不是在首页！");
    }
    // 产品列表 pageWidth:页面宽度  nav:ul列表的id   navBtn:ul列表的按钮id
    function navToggle(pageWidth,nav,navBtn) {
        //页面宽度大于二级菜单动画
        if (document.body.clientWidth > pageWidth) {
            $(nav + ">li").has("ul").not(".on").on("mouseenter", function (event) {
                $(this).children("ul").stop().show(250);
            });
            $(nav + ">li").has("ul").not(".on").on("mouseleave", function (event) {
                $(this).children("ul").stop().hide(200);
            });
        } else if (document.body.clientWidth <= pageWidth) {
            $(navBtn).on("click",function(){
                $(nav).stop().slideToggle(300);
            });
            $(nav + ">li").children("a").on("click", function (event) {
                event = event || window.event;
                if ($(event.target).parent("li").has("ul").length) {// 没有ul子元素length===0
                    //能力检测   $(event.target)只能使用jq事件  event使用dom事件
                    if (event.preventDefault) {  //非IE下内核 webkit引擎
                        event.preventDefault();
                    } else {
                        event.returnValue = false; //IE引擎
                    }
                    $(this).parent("li").children("ul").stop().slideToggle(250);
                }
            });
        }
    }
    //导航条响应式方法
    navToggle(699,"#nav","#navBtn");
    navToggle(699,"#productNav","#productNavBtn");
    $(".productsRight").css("minHeight",$(".productsLeft").height()+"px");
    // 产品内页切换
    $(".productTil>li:nth-child(1)").on("click",function(){
        $(".productTil>li:nth-child(2)").removeClass("on");
        $(this).addClass("on");
        $(".productS").css("display","none");
        $(".productD").css("display","block");
    });
    $(".productTil>li:nth-child(2)").on("click",function(){
        $(".productTil>li:nth-child(1)").removeClass("on");
        $(this).addClass("on");
        $(".productD").css("display","none");
        $(".productS").css("display","block");
    });
    // 客户案例弹出
    var ImgBox = $("#ImgBox");
    $(".case>li>div>img").on("click",function(){
        $(".boxBg").css("display","block");
        ImgBox.attr("src",$(this).attr("src"));
        // 过渡动画
        $(".box").stop().animate({
            "top":"50%"
        },300);
        if(ImgBox.height() >= $(window).height() - 40){
            $("#ImgBox").css("height",$(window).height() - 40 + "px");
        }
        if(ImgBox.width() >= $(window).width() - 50){
            ImgBox.css("width",$(window).width() - 50 + "px");
        }
    });
    $(".close").on("click",function(){
        // 过渡动画 回调隐藏
        $(".box").stop().animate({
            "top":"30%"
        },200,function(){
            $(".boxBg").css("display","none");
            ImgBox.attr("src","");
            ImgBox.css({"width":"auto","height":"auto"});
        });
    });
    try {
        // 放大镜
        var productBox = $("#productBox");
        var inner = $(".inner").eq(0);
        var big = $("#big");
        var bigImg = big.children("img").eq(0);
        big.css("height", productBox.height());
        var width, height;
        if (big.width() / 5 > 50) {
            width = big.width() / 3;
            height = big.width() / 3;
        } else {
            width = 50;
            height = 50;
        }
        inner.css({"width": width + "px", "height": height + "px"});
        productBox.on("mouseover", function () {
            inner.css("display", "block");
            big.css("display", "block");
        });
        bigImg.css({"width": productBox.width() * 3 + "px", "height": productBox.height() * 3 + "px"});
        // 偏移量
        //console.log(productBox.offset().left,productBox.offset().top);
        productBox.on("mousemove", function (event) {
            event = event || window.event;
            var left = event.pageX - productBox.offset().left - width / 2;
            var top = event.pageY - productBox.offset().top - height / 2;
            if (left <= 0) {
                left = 0;
            } else if (left >= productBox.width() - inner.width()) {
                left = productBox.width() - inner.width();
            }
            if (top <= 0) {
                top = 0;
            } else if (top >= productBox.height() - inner.height()) {
                top = productBox.height() - inner.height();
            }
            inner.css({"left": left + "px", "top": top + "px"});

            var left2 = left / (productBox.width() - inner.width()) * (big.width() - bigImg.width());
            var top2 = top / (productBox.height() - inner.height()) * (big.height() - bigImg.height());
            bigImg.css({"left": left2 + "px", "top": top2 + "px"});
        });
        productBox.on("mouseout", function () {
            inner.css("display", "none");
            big.css("display", "none");
        });
    }catch (error){
        console.log("不是产品详情页");
    }
    // 购物车功能
    //自定义验证函数，验证coffeeType和coffeePrice的数据是否存在
    // function verify() {
    //     var type = localStorage.getItem("myCat");
    //     type = type ? true : false;
    //     console.log("myCat: " + type);
    // }
    // // 创建Storage对象
    // // localStorage.setItem("myCat","joe");
    // verify();
    // var arr = Array();
    // localStorage.setItem("myCat",arr);
    // $(".carBtn").on("click",function(){
    //     var thisLI = $(this).parent("div").parent("li");
    //     var LiLink = thisLI.children("a").attr("href");
    //     var LiTil = thisLI.children("a").children("h3").text();
    //     var LiImgSrc = thisLI.children("a").children(".productsBox").children("img").attr("src");
    //     var LiDetails = thisLI.children("a").children(".productDetails").text();
    //     var LiP = thisLI.children(".productDown").children("p").text();
    //     console.log(LiLink + LiTil + LiImgSrc + LiDetails + LiP);
    //     var product = {
    //
    //     }
    // });

    utils = {
        setParam: function(name, value){
            localStorage.setItem(name, value);
        },
        getParam: function(name){
            return localStorage.getItem(name);
        }
    };
    product = {
        id:"",
        name:"",
        productImg:"",
        productTxt:"",
        price:0.00
    };
    cart = {
        //向购物车添加商品
        addproduct: function(product){
            var ShoppingCart = utils.getParam("ShoppingCart");
            if(ShoppingCart == null || ShoppingCart == ""){
                //第一次加入商品
                var jsonstr = {"productlist":[{"id":product.id,"name":product.name,"productImg":product.productImg,
                    "productTxt":product.productTxt,"price":product.price}]};
                utils.setParam("ShoppingCart","'" + JSON.stringify(jsonstr));
            }else{
                var jsonstr = JSON.parse(ShoppingCart.substr(1,ShoppingCart.length));
                var productlist = jsonstr.productlist;
                var result = false;
                //查找购物车是否有改商品
                for(var i in productlist){
                    if(productlist[i].id == product.id){
                        result = true;
                    }
                }
                if(!result){
                    //没有该商品 直接加入
                    productlist.push({"id":product.id,"name":product.name,"productImg":product.productImg,
                        "productTxt":product.productTxt,"price":product.price});
                }
                //保存购物车
                utils.setParam("ShoppingCart","'"+JSON.stringify(jsonstr));
            }
        },
        //获取购物车中所有商品
        getproductlist: function(){
            var ShoppingCart = utils.getParam("ShoppingCart");
            var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
            var productlist = jsonstr.productlist;
            return productlist;
        },
        //判断购物车是否存在商品
        existproduct: function(id){
            var result = false;
            var ShoppingCart = utils.getParam("ShoppingCart");
            if(ShoppingCart != bull){
                var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
                var productlist = jsonstr.productlist;
                for(var i in productlist){
                    if(productlist[i].id == id){
                        result = true;
                    }
                }
            }
            return result;
        },
        //删除购物车商品
        deleteproduct: function(id){
            var ShoppingCart = utils.getParam("ShoppingCart");
            var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
            var productlist = jsonstr.productlist;
            var list = [];
            for(var i in productlist){
                if(productlist[i].id == id){

                }else{
                    list.push(productlist[i]);
                }
            }
            jsonstr.productlist = list;
            utils.setParam("ShoppingCart","'" + JSON.stringify(jsonstr));
        }
    };
    //添加产品到购物车
    $(".carBtn").on("click",function(){
        var thisLI = $(this).parent("div").parent("li");
        var LiLink = thisLI.children("a").attr("href");
        var LiTil = thisLI.children("a").children("h3").text();
        var LiImgSrc = thisLI.children("a").children(".productsBox").children("img").attr("src");
        var LiTxt = thisLI.children("a").children(".productTxt").text();
        var LiP = thisLI.children(".productDown").children("p").text();
        var product = {
            id:LiLink,
            name:LiTil,
            productImg:LiImgSrc,
            productTxt:LiTxt,
            price:LiP
        };
        //商品添加到购物车
        cart.addproduct(product);
        var productlist = cart.getproductlist();
        console.log(productlist);
        $("#CarNumber").text(productlist.length);
    });
    $(".carBtn1").on("click",function(){
        var thisLI = $(this).parent("li");
        var LiLink = thisLI.children("a").attr("href");
        var LiTil = thisLI.children(".productsdTil").children("h3").text();
        var LiImgSrc = thisLI.children(".contBox").children("img").attr("src");
        var LiTxt = thisLI.children(".productDetails").children("i").text();
        var LiP = thisLI.children(".productDetails").children("p").text();
        var product = {
            id:LiLink,
            name:LiTil,
            productImg:LiImgSrc,
            productTxt:LiTxt,
            price:LiP
        };
        //商品添加到购物车
        cart.addproduct(product);
        var productlist = cart.getproductlist();
        console.log(productlist);
        $("#CarNumber").text(productlist.length);
    });
    $(".productBtn").on("click",function(){
        var thisLI = $(this).parent("div").parent(".productTopRight").parent(".productTop");
        var LiLink = window.location.search;
        var LiTil = thisLI.children(".productTopRight").children("h3").text();
        var LiImgSrc = thisLI.children(".productTopLeft").children("img").attr("src");
        var LiTxt = $(".productD").eq(0).text();
        var LiP = thisLI.children(".productTopRight").children("div").children("p").text();
        var product = {
            id:LiLink,
            name:LiTil,
            productImg:LiImgSrc,
            productTxt:LiTxt,
            price:LiP
        };
        //商品添加到购物车
        cart.addproduct(product);
        var productlist = cart.getproductlist();
        $("#CarNumber").text(productlist.length);
    });
    //取出商品在购物车展示
    var productlist=cart.getproductlist();
    // 显示购物车商品数
    $("#CarNumber").text(productlist.length);
    var cars = $("#cars");
    for(var i = 0;i < productlist.length; i++){
        cars.append("<li class=\"clearFix\">\n" +
            "            <div class=\"carBox\">\n" +
            "                <img src=\"" + productlist[i].productImg +"\" alt=\"product Img\"/>\n" +
            "            </div>\n" +
            "            <div class=\"carCont clearFix\">\n" +
            "                <div class=\"carDetails fl\">\n" +
            "                    <h3>"+ productlist[i].name +"</h3>\n" +
            "                    <div>"+ productlist[i].productTxt +"</div>\n" +
            "                </div>\n" +
            "                <p class=\"fl\">"+ productlist[i].price +"</p>\n" +
            "                <button class=\"Delete fr\">删除</button>\n" +
            "            </div>\n" +
            "<a href=\""+ productlist[i].id +"\"></a>"+
            "        </li>");
    }
    //删除购物车产品
    $(".Delete").on("click",function(){
        var deleteId = $(this).parent(".carCont").next("a").attr("href");
        cart.deleteproduct(deleteId);
        // 显示购物车商品数
        $("#CarNumber").text(productlist.length);
        //刷新当前页面
        window.location.reload();
    });
};



























