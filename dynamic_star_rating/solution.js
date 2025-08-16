const generateStarRating = (rating) => {
    if (rating >= 0 && rating <= 5) {
      
      let stars = "";
      // Round rating to nearest 0.5 and split into full and half part
      const [noOfFullStar, ishalf] = (Math.round(rating * 2) / 2)
        .toString()
        .split(".");
      
      // Add full stars
      stars += "★".repeat(noOfFullStar);
      // Add half star if needed
      stars += ishalf ? "½" : "";
      // Fill remaining with empty stars
      stars += "☆".repeat(5 - stars.length);
  
      return stars;
    } else {
      return "Invalid rating"; // Handle out-of-range values
    }
  };
  
  console.log(`Rating 3.2 -> "${generateStarRating(3.2)}"`); // "★★★☆☆"
  console.log(`Rating 4.8 -> "${generateStarRating(4.8)}"`); // "★★★★★"
  console.log(`Rating 2.5 -> "${generateStarRating(2.5)}"`); // "★★½☆☆"
  