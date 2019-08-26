var printOneToOneThousand = function (num) {
    console.log(num);
    num++;
    return num !== 1001 && printOneToOneThousand(num); // I'm not sure if short
    // circuiting can technically be considered a conditional statement, but I
    // can't think of any other straightforward way of doing this otherwise!
};
printOneToOneThousand(1);
