document.addEventListener('DOMContentLoaded', () => {
    const progress = document.getElementById('progress');
    const amount = document.getElementById('amount');
    const submitComment = document.getElementById('submit-comment');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    let raisedAmount = 0;
    const goalAmount = 1000;

    // Update the donation tracker
    function updateTracker() {
        const percentage = (raisedAmount / goalAmount) * 100;
        progress.style.width = percentage + '%';
        amount.textContent = raisedAmount;
    }

    // Add a funny comment
    submitComment.addEventListener('click', () => {
        const comment = commentInput.value;
        if (comment) {
            const li = document.createElement('li');
            li.textContent = comment;
            commentsList.appendChild(li);
            commentInput.value = '';
        }
    });

    // Simulate a donation (for fun)
    setInterval(() => {
        raisedAmount += Math.floor(Math.random() * 10);
        if (raisedAmount > goalAmount) {
            raisedAmount = goalAmount;
        }
        updateTracker();
    }, 1000);

    // Share buttons
    document.getElementById('share-facebook').addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${document.location.href}`, '_blank');
    });

    document.getElementById('share-twitter').addEventListener('click', () => {
        window.open(`https://twitter.com/share?url=${document.location.href}&text=Help move Emilia Böhm to Iran!`, '_blank');
    });

    updateTracker();
});