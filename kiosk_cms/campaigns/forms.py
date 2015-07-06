from django import forms
from .models import Campaign


class CampaignAdminForm(forms.ModelForm):

    class Meta:
        model = Campaign
        fields = ('sponsor', 'active', 'default_campaign', 'name',
                  'slug', 'description', 'start_date', 'end_date')

    def save(self):
        if self.active.has_changed():
            active = self.cleaned_data["active"]
            if active:
                if self.activate():
                    return True
                else:
                    return False
            else:
                if self.deactivate():
                    return True
                else:
                    return False
