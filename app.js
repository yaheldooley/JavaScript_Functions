console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
printOdds(100);
function printOdds(count)
{
    if (count < 1)
    {
        return;
    }
    for (let i = 0; i < count; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

checkAge("Jim", 17)
function checkAge(userName = "Stranger", age = 1)
{
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age >= 16)
    {
        console.log(aboveSixteen);
    }
    else
    {
        console.log(belowSixteen);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

getQuadrant(-6, 18);

function getQuadrant(x,y)
{
    if(x < 0)
    {
        if (y > 0)
        {
            console.log("Quadrant 2");
        }
        else if (y < 0)
        {
            console.log("Quadrant 3");
        }
    }
    else if(x > 0)
    {
        if (y > 0)
        {
            console.log("Quadrant 1");
        }
        else if (y < 0)
        {
            console.log("Quadrant 4");
        }
    }
    else{
        console.log("Origin");
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

typeOfTTriangle(2,2,1);
typeOfTTriangle(1,1,2);

function typeOfTTriangle(side1, side2, side3)
{
    if(side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2)
    {
        console.log("isosceles triangle");
    }
    else
    {
        console.log("invalid triangle");
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

dataPlanStatus(100,15,56);
function dataPlanStatus(planLimit, dayInMonth, usage)
{

    

    let daysLeft = 30 - dayInMonth;
    let currentAvgUse = usage/dayInMonth;
    let allottedAvgUse = planLimit/30;
    let estimOverage = daysLeft * (currentAvgUse - allottedAvgUse);
    let recommendedUse = (planLimit-usage) / daysLeft;

    console.log(`${dayInMonth} days used, ${daysLeft} days remaining`);
    console.log(`Average daily use: ${allottedAvgUse.toFixed(2)}GB/day`);

    if (currentAvgUse > allottedAvgUse)
    {
        console.log(`You are EXCEEDING your average daily use at ${currentAvgUse.toFixed(2)} GB/day),
        continuing this high usage, you'll exceed your data plan by
        ${estimOverage.toFixed(2)} GB.`);
        console.log(`To stay below your data plan, use no more than ${recommendedUse.toFixed(2)} GB/day.`);
    }
    else
    {
        console.log(`You are BELOW your average daily use at ${currentAvgUse.toFixed(2)} GB/day)`);
        console.log(`To stay below your data plan, use no more than ${recommendedUse.toFixed(2)} GB/day.`);
    }


}