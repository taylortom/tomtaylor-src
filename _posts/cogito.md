[!META{"id":"cogito","title":"Cogito","published":"2012-05-17","tags":["hacking"]}]

![](file://cogito_logo.png)

After 6 months of hard work, I've finally finished my final year university project, which I'm pleased to say turned out pretty well.

The main aim of my project was to experiment with academic AI techniques in a game context. It's pretty surprising that games aren't more adventurous in terms of their AI, which still takes a 'smoke and mirrors' approach; providing an illusion of intelligence rather than actually creating intelligent systems. Many of the techniques and algorithms used today date back 30 years or more. With my project, I wanted to introduce some more modern techniques (in particular machine learning).

The main inspiration for my game was the old school platform-puzzler game <a href="http://en.wikipedia.org/wiki/Lemmings_(video_game)">Lemmings</a>. My intention was to take the Lemmings concept, which requires the player to safely guide a number of Lemmings across a treacherous 2D level, and remove the human element. I wanted to allow the characters to explore for themselves and learn how best to cross the level, without any human interaction.

The main learning method used in the game is <a href="http://en.wikipedia.org/wiki/Reinforcement_learning">reinforcement learning</a>, which uses a 'carrot and stick' method to reward the characters for 'good' behaviour, and punishing them 'bad' behaviour.

I developed my game for iOS (specifically the iPhone), and it turned out pretty well. The Lemmings actually work by using a number of 'episodes' or lives to actually learn the level. Movement is completely randomised during these episodes. When they finish the learning stage, they have one chance to try and reach the exit safely using their gained knowledge. You can see a couple of videos of my project in action:

<youtube video-id="fKnrTHL7j58" />

The full source code is <a href="https://github.com/taylortom/Cogito" target="_blank">available on Github</a>, and should be appearing on the App Store very soon.
