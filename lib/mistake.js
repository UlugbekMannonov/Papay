class Definer {
    // General errors
    static general_err1 = "att: something went wrong!";
    static general_err2 = "att: ther is no data with that params!";
    static general_err3 = "att: file upload error!";



    // Member auth related errors
    static auth_err2 = "att: jwt token creation error";
    static auth_err3 = "att: no member with that mb_nick!";
    static auth_err4 = "att: your credentials do not match!";
    static auth_err5 = "att: you are not authenticated";

    // Product related errors
    static product_err1 = "att: product creation is failed!";

    // Orders related errors
    static order_err1 = "att: order creation is failed!";
    static order_err2 = "att: order item creation is failed!";
    static order_err3 = "att: no order with that params exists";

    // Articles related errors 
    static article_err1 = "att: author member for article not provided!";
    static article_err2 = "att: not article found for that member!";
    static article_err3 = "att: not articles found for that target!";

    // Follow related errors
    static follow_err1 = "att: self subscription is denied!";
    static follow_err2 = "att: new follow subscription is failed!";
    static follow_err3 = "att: no follow data found!";

    // db realted errors
    static mongo_validation_err1 = "att: mongodb validation failed!";
}

module.exports = Definer;