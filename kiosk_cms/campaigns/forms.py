from django import forms
from .models import Campaign


class CampaignAdminForm(forms.ModelForm):

    class Meta:
        model = Campaign
        fields = ('sponsor', 'active', 'next_active', 'default_campaign', 'name',
                  'slug', 'description', 'start_date', 'end_date')

    def save(self, commit=True):
        instance = super(CampaignAdminForm, self).save(commit=False)

        if self.is_valid():

            # tests if 'active' field has changed
            if 'active' in self.changed_data:
                # activate campaign
                if instance.is_active():
                    instance.activate()
                # deactivate campaign
                else:
                    instance.deactivate()

            instance.save()
        return instance
