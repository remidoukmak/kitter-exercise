# The task is to recreate the Kitter timeline in the Timeline.png file. The CSS is provided for you except for the last exercise so you don't need to worry about it. Make sure to add a className with the components name (capitalized) when you create a component.

## 1. Within the Username component, change the hardcoded value and use a variable for the username instead. You can use the Meows data to get the value (remember, if you wanted the first user's username, it would be meows[0].user.username)

## 2. Now replace the variable with a username prop passed to the Username component. You can pass this from the Meow component.

## 3. Complete the Avatar component by inserting an <img /> element with a src prop within the <div>. The src should be equal to the photo prop. Now import the Avatar into the Meow component and place it inside the top section.

## 4. Add the text to the Meow component within the mid section in the <p> tag.

## 5. Add the hashtags in the mid section underneath the text in the hashtags container. The Hashtag component is already prepared. You need to map over the hashtags and pass the text of each hashtag as a child. Don't forget to add the key prop as well.

## 6. Add two Icon components in the bottom section for the replies and likes to match the Meow in Timeline.png. The Icon component is already created, you need to pass the right props and also add the number to display alongside the icon.

## 7. Create a new component called Profile. This component should contain the Avatar and the user's display name alongside each other, as in Timeline.png. You will need to import Avatar and pass the user's display name and photo as props to Profile. Replace the Avatar in Meow with the new Profile component.

## 8. Create a Timeline component which takes in meows as a prop and puts them inside the Timeline. Add the CSS for the Timeline (in styles.css) so that it is a vertical flexbox with center aligned items.
