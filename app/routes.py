from flask import render_template, request, redirect, url_for
from app import app, db
from app.models import User

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username, password=password).first()
        if user:
            # Implement session management or JWT for authentication
            return redirect(url_for('user_profile' if not user.is_admin else 'admin_dashboard'))
        else:
            return render_template('login.html', error='Invalid username or password')
    return render_template('login.html')

@app.route('/user-profile')
def user_profile():
    return render_template('user_profile.html')

@app.route('/admin-dashboard')
def admin_dashboard():
    return render_template('admin_dashboard.html')
