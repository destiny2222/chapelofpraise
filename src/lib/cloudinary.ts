export async function uploadToCloudinary(file: File | null): Promise<string | null> {
  // If no file was selected or the file is empty, return null
  if (!file || file.size === 0 || file.name === 'undefined') return null

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

  if (!cloudName || !uploadPreset) {
    throw new Error("Missing Cloudinary Environment Variables. Please add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET to your .env.local file.")
  }

  // Prepare the form data for Cloudinary
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', uploadPreset)

  try {
    // Send POST request to Cloudinary API
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to upload to Cloudinary')
    }

    // Return the secure URL provided by Cloudinary
    return data.secure_url
  } catch (error) {
    console.error('Cloudinary upload error:', error)
    throw new Error('Could not upload image to Cloudinary. Please check your upload preset and cloud name.')
  }
}
