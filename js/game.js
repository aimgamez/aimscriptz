var $scene = document.getElementById('game');

function Game() {
    this.viewport = document.createElement('canvas');
    this.context = viewport.getContext('2d');

    this.viewport.width = 800;
    this.viewport.height = 600;

    $scene.insertBefore(this.viewport, $scene.firstChild);
  
    this.context.font = '32px Arial';
    this.context.fillText('Welcome!.', 5, 50, 800);

    return this;
}

// Instantiate the game in a global
window.game = new Game();

// Export the game as a module
module.exports = game;
