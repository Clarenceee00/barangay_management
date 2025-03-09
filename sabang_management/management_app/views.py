from django.shortcuts import render, redirect
from .forms import ResidentForm

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

