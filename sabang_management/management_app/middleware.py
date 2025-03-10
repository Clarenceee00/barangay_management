from django.shortcuts import redirect

class RestrictAdminMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/admin-dashboard/') and not request.user.is_staff:
            return redirect('user_dashboard')
        return self.get_response(request)
