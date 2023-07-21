class Definer {
    // General errors
    static general_err1 = "att: something went wrong!";
    static general_err2 = "att: ther is no data with that params!";
    static general_err3 = "att: file upload error!";



    // Member auth related errors
    static auth_err1 = "att: mongodb validation is failed!";
    static auth_err2 = "att: jwt token creation error";
    static auth_err3 = "att: no member with that mb_nick!";
    static auth_err4 = "att: your credentials do not match!";
    static auth_err5 = "att: you are not authenticated";

    // Product related errors
    static product_err1 = "att: product creation is failed!";

    // Orders related errors
    static order_err1 = "att: order creation failed!";

}

module.exports = Definer;