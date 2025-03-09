from django.shortcuts import render, redirect
from .forms import ResidentForm
from django.contrib.auth.decorators import user_passes_test
from django.contrib.auth.decorators import login_required

@login_required
def user_dashboard(request):
    return render(request, 'user_dashboard.html')

def is_admin(user):
    return user.is_authenticated and user.role == 'admin'

@user_passes_test(is_admin)
def admin_dashboard(request):
    return render(request, 'admin_dashboard.html')


def resident_create(request):
    if request.method == 'POST':
        form = ResidentForm(request.POST)
        if form.is_valid():
            form.save()  # Save the new resident record
            return redirect('residents')  # Redirect to a residents list or a success page
    else:
        form = ResidentForm()
    
    context = {
        'form': form,
    }
    return render(request, 'resident_form.html', context)

