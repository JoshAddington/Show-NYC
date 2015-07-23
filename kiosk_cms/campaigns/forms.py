from django import forms
from .models import Campaign


class CampaignAdminForm(forms.ModelForm):

    class Meta:
        model = Campaign
        fields = ('sponsor', 'active', 'next_active',
                  'stock_image', 'default_campaign', 'name',
                  'slug', 'description', 'start_date', 'end_date')

    # checks if the 'active' field was changed, and called the 
    # appropriate model method if it was changed.
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
