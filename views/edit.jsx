var React = require('react');
const Navbar = require('./navbar.jsx');

class Edit extends React.Component {
    render() {
        let formAction = '/recipes/' + this.props.id + '?_method=put';
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body class="d-flex h-100 flex-column">
                  <header>
                    <Navbar/>
                  </header>
                <main role="main" class="flex-shrink-0">
                    <h2>Edit Recipe</h2>
                    <form method="POST" action={formAction}>
                        <h3>Recipe Title:</h3>
                        <input type="text" name="title" value={this.props.title} required/><br/>
                        <h3>Ingredients:</h3>
                        <input type="text" name="ingredients" value={this.props.ingredients} required/><br/>
                        <h3>Instructions:</h3>
                        <input type="text" name="instructions" value={this.props.instructions} required/><br/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </main>
                <footer class="footer mt-auto">
                  <div class="container">
                    <span class="text-muted">Copyright &copy; 2019</span>
                  </div>
                </footer>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
            </html>
            );
    }
}

module.exports = Edit;