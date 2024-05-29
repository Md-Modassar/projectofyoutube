import cloud from "../../images/cloud.png"
import sun from "../../images/sun.png"
import cloundsun from "../../images/clousun.png"
import cloudrain from "../../images/cloudsrain.png"
import cloudlight from "../../images/lighcl.png"

export default [
    {
        "city": "Mumbai",
        "day" :"Today",
        "temperature":"32°C",
        "image":sun ,
        "forecast": [
            
            {day: "Day 2", temperature: " 34°C", weather: "Hot", image: sun},
            {day: "Day 3", temperature: " 33°C", weather: "Rainy", image:cloudrain },
            {day: "Day 4", temperature: " 31°C", weather: "Thunderstorms", image:cloudlight},
            {day: "Day 5", temperature: " 32°C", weather: "Humid", image: cloundsun}
        ]
    },
    {
        "city": "Delhi",
        day: "Today", 
        temperature: " 38°C", 
        image: sun,
        "forecast": [
     
            {day: "Day 2", temperature: " 39°C", "weather": "Hot", image:cloundsun},
            {day: "Day 3", temperature: " 37°C", "weather": "Cloudy", image:cloud},
            {day: "Day 4", temperature: " 35°C", "weather": "Thunderstorms", image:cloudlight},
            {day: "Day 5", temperature: " 36°C", "weather": "Sunny", image:sun}
        ]
    },
    {
        "city": "Bangalore",
        "day": "Today", 
        "temperature": " 27°C", 
         "image":cloud,
        "forecast": [
      
            {day: "Day 2", temperature: " 28°C", "weather": "Sunny", image: sun},
            {day: "Day 3", temperature: " 26°C", "weather": "Rainy", image: cloudrain},
            {day: "Day 4", temperature: " 25°C", "weather": "Thunderstorms", image:cloudlight},
            {day: "Day 5", temperature: " 27°C", "weather": "Partly Cloudy", image:cloundsun },
        ]
    },
    {
        "city": "Chennai",
        "day": "Today",
         "temperature": " 34°C", 
         "weather": "Sunny", 
         "image":sun,
        "forecast": [
           
            {day: "Day 2", temperature: " 35°C", "weather": "Hot", image:sun},
            {day: "Day 3", temperature: " 33°C", "weather": "Cloudy", image:cloud},
            {day: "Day 4", temperature: " 32°C", "weather": "Rainy", image: cloudrain},
            {day: "Day 5", temperature: " 34°C", "weather": "Sunny", image: cloundsun}
        ]
    },
    {
        "city": "Kolkata",
        "day": "Today", 
        "temperature": "31°C", 
        "weather": "Humid", 
        "image": cloundsun,
        "forecast": [
            {day: "Day 2", temperature: " 32°C", "weather": "Sunny", image: sun},
            {day: "Day 3", temperature: " 30°C", "weather": "Rainy", image: cloudrain},
            {day: "Day 4", temperature: " 29°C", "weather": "Thunderstorms", image:cloudlight},
            {day: "Day 5", temperature: " 31°C", "weather": "Cloudy", image:cloud}
        ]
    }
]
